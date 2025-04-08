sequenceDiagram
    participant Browser
    participant Server

```mermaid
    Note over Browser: The user accesses to the SPA URL

    Browser->>Server: GET to https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: HTML document
    deactivate Server

    Browser->>Server: GET /exampleapp/main.css
    activate Server
    Server-->>Browser: CSS file (main.css)
    deactivate Server

    Browser->>Server: GET /exampleapp/spa.js
    activate Server
    Server-->>Browser: JavaScript file (spa.js)
    deactivate Server

    Note right of Browser: JavaScript executes and requests JSON data

    Browser->>Server: GET /exampleapp/data.json
    activate Server
    Server-->>Browser: JSON with existing notes
    deactivate Server

    Note right of Browser: The list of notes is rendered in the DOM


    Note over Browser: The user write a note and make click in "Save"

    Browser->>Server: POST /exampleapp/new_note_spa
    activate Server
    Note right of Server: Keys in JSON "content" and "date".

    Server-->>Browser: 201 Created - Note saved in the server
    deactivate Server

    Note right of Browser: The user sees their new note instantly, even before the server responds
```