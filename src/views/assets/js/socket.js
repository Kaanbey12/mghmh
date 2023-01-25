const socket = io.connect("https://Tire.ware-org.repl.co");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })