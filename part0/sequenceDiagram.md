```mermaid
sequenceDiagram
    participant browser
    participant Server

note right of browser: START
    browser->>+Server: HTTP Request, POST to https://studies.cs.helsinki.fi/exampleapp/new_note.
    Server->>+browser: 302 Response with GET redirections.
    browser->>+Server: HTTP Request, GET. to 128.214.137.97:443 requesting notes
    Server->>+browser: 200 Response with notes.html
    browser->>+Server: HTTP Request, GET. to 128.214.137.97:443 requesting main.css
    Server->>+browser: 200 Response with main.css
    browser->>+Server: HTTP Request, GET. to 128.214.137.97:443 requesting main.js
    Server->>+browser: 200 Response with main.js
    browser->>+Server: HTTP Request, GET. to 128.214.137.97:443 requesting data.json
    Server->>+browser: 200 Response with data.json
    browser->>+Server: HTTP Request, GET. to 128.214.137.97:443 requesting data.json
    Server->>+browser: 200 Response with data.json
    browser->>+Server: HTTP Request, GET. to 128.214.137.97:443 requesting favicon.ico
    Server->>+browser: 404 Response - Not Found
note right of browser: END
```