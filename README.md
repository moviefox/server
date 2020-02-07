# MovieFox

  
**registration**
----
register user


* **URL**

  /user/regsiter

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**googleSignIn**
----
  login using oauth

* **URL**

  /user/googlesingin

  * **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**user favorites**
----
  get all movies favorited by user

* **URL**

  /user/movie

* **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        array of movie list
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`

**bookmark movie**
----
  add bookmarked movie to user favorite list

* **URL**

  /user/

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
       "title": ...,
       "plot": ...,
       "poster": ....,
       "year": ...
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
    

**unbookmarked**
----
  remove a movie from user's list

* **URL**

  /movies/:id

  * **Method:**

  `delete`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { n: 1, ndeleted: 1, ok: 1 }
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`



**popular movies**
----
  get popular movies from tmdb api

* **URL**

  /movies/popular/:page

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": [
          list of popular movies
        ]
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`


**bioskop / theatre**
----
  get theatre location based on params

* **URL**

  /movies/bioskop/:loc

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": [
          list of theatre
        ]
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`


**search**
----
  search a movie based on title

* **URL**

  /movies/search/:page

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": [
          list of movies with related title
        ]
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`


**detail**
----
  get movies detail

* **URL**

  /movies/detail/:id

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { 
          detail of one movie
        }
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`
