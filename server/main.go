package main

import (
	"fmt"
	"net/http"

	"ChatRoom/models"

	"github.com/gorilla/websocket"
	"github.com/labstack/echo/v4"
)

// var clients = make(map[string]*models.Client)
// var mutex = &sync.Mutex{}

var server = &models.Server{
	Rooms: make(map[string]*models.Room),
}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func wsHandler(c echo.Context) error {
	conn, err := upgrader.Upgrade(c.Response(), c.Request(), nil)

	if err != nil {
		fmt.Println("errore nell'upgrade della connessione : ", err)
		return err
	}

	defer conn.Close()

	id := c.QueryParam("id")
	room := c.QueryParam("rooms")

	if id == "" || room == "" {
		return fmt.Errorf("ID o stanza non specificati")
	}

	client := &models.Client{
		ID:    id,
		Conn:  conn,
		Rooms: make(map[string]*models.Room),
	}

	// roomNames := strings.Split(room, ",")

	// for _, roomName := range roomNames {
	// 	server.AddClientToRoom(roomName, client)
	// }

	server.AddClientToRoom(room, client)

	defer server.RemoveClientFromRoom(client)

	fmt.Printf("Client %s connesso alla room : %s\n", id, room)
	for {
		_, msg, err := conn.ReadMessage()
		if err != nil {
			fmt.Printf("Errore durante la lettura del messaggio del client %s : %s\n", id, err)
			break
		}

		fmt.Printf("messaggio ricevuto da id %s : %s\n", id, msg)

		server.BroadCastToRoom(room, ("id:" + id + " message:" + string(msg)))
	}

	return nil
}

func main() {
	e := echo.New()

	e.GET("/ws", wsHandler)

	e.Logger.Fatal(e.Start(":3000"))
}
