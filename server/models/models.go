package models

import (
	"fmt"
	"sync"

	"github.com/gorilla/websocket"
)

type Client struct {
	Conn  *websocket.Conn
	ID    string
	Rooms map[string]*Room
}

type Room struct {
	Name    string
	Clients map[string]*Client
}

type Server struct {
	Rooms map[string]*Room
	sync.Mutex
}

func (s *Server) AddClientToRoom(roomName string, client *Client) {
	s.Lock()
	defer s.Unlock()
	room, exist := s.Rooms[roomName]
	if !exist {
		room = &Room{
			Name:    roomName,
			Clients: make(map[string]*Client),
		}
		s.Rooms[roomName] = room
	}

	room.Clients[client.ID] = client
	client.Rooms[roomName] = room
}

func (s *Server) RemoveClientFromRoom(client *Client) {
	s.Lock()
	defer s.Unlock()

	for _, room := range client.Rooms {
		delete(room.Clients, client.ID)
		if len(room.Clients) == 0 {
			delete(s.Rooms, room.Name)
		}
	}
	client.Rooms = make(map[string]*Room)
}

func (s *Server) BroadCastToRoom(roomName string, message string) {
	s.Lock()
	room, exist := s.Rooms[roomName]
	s.Unlock()

	if exist {
		for _, client := range room.Clients {
			err := client.Conn.WriteMessage(websocket.TextMessage, []byte(message))
			if err != nil {
				fmt.Println("problema nell'invio del messaggio")
				s.RemoveClientFromRoom(client)
			}
		}
	} else {
		fmt.Println("la room non esiste")
	}
}
