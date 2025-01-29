import { Rcon } from "rcon-client"
import 'dotenv/config'

async function test() {
  const rcon = new Rcon({
    host: process.env.SERVER_IP||"localhost", port: parseInt(process.env.RCON_PORT||"25575"), password: process.env.RCON_PASSWORD||"password"
  })
  await rcon.connect()

  await rcon.send("deop somebodyvii")
  await rcon.send("op somebodyvii")

  rcon.end()
}

test()
