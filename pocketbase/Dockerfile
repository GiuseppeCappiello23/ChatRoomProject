FROM alpine:latest

WORKDIR /app

COPY . .

EXPOSE 8090

# start PocketBase
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090"]
# CMD [ "./pocketbase", "serve" ]