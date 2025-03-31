## Sample Nodejs app with JWT token generation and verification

If you need to run the app with your own private and public keys,follow the steps below :-

- Step(1).Install openssl

  - download openssl from <a href="https://slproweb.com/products/Win32OpenSSL.html">Download OpenSSL</a>
  - install the .exe
  - set the path variables(in windows)
  - run this in cmd to verify the installation

  ```bash
  openssl version
  ```

- Step(2).create public key and a private key using openssl

  - private key

```bash
openssl ecparam -name prime256v1 -genkey -noout -out private.pem
```

    - public key

```bash
openssl ec -in private.pem -pubout -out public.pem
```

## Install the dependancies

```bash
npm install
```

## Run the applicaiton

```bash
npm start
```

Run the app with postman
[http://localhost:8000](http://localhost:8000)
