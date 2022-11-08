const http = require("http")
const path = require("path")
const fs = require("fs")
const { extname } = require("path")

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content)
    //     })
    // }
    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith' },
    //         { name: 'John Doe' }
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users))
    // }

    // Build dynamic file path
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    )

    // Get file extension
    let extName = path.extname(filePath)
    console.log(extName)

    // Initial Content type
    let contentType = "text/html"

    // Check ext and set content type
    switch (extName) {
        case ".js":
            contentType = "text/javascript"
            break
        case ".css":
            contentType = "text/css"
            break
        case ".json":
            contentType = "application/json"
            break
        case ".png":
            contentType = "image/png"
            break
        case ".jpg":
            contentType = "image/jpg"
            break
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == "ENOENT") {
                // Page not found
                fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (err, content) => {
                        res.writeHead(200, { "Content-Type": "text/html" })
                        res.end(content, "utf8")
                    }
                )
            } else {
                // Some serverError
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            res.writeHead(200, { "Content-Type": contentType })
            res.end(content)
        }
    })
})

const PORT = process.env.PORT || 5100

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
