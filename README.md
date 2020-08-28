# REST_API_GUIDE

# REST Concepts & Ideas

  * REST APIs are all about data, no UI logic is exchanged
  * REST APIs are normal Node servers which expose different endpoints (Http method + path) for clients to send requests to
  * JSON is the common data format that is used both for req & res
  * REST APIs are decoupled from the clients that use them

# Req & Res

  * Attach data in JSON format and let the other end know by setting the "Content-Type" header
  * CORS errors occur when using an API that does not set CORS headers
