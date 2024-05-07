import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
import logo1 from "./Assets/encdec.png";
import logo2 from "./Assets/locker.png";
import modalo from "../components/Modal";

function Encryption() {
  // STATES
  const [Encryption, setEncryption] = useState(false);
  const [Decryption, setDecryption] = useState(false);
  const [description, setDescription] = useState(true);
  const [UserEncryptTxt, setUserEncryptTxt] = useState("");
  const [UserDecryptTxt, setUserDecryptTxt] = useState("");
  const [UserEncrypt, setUserEncrypt] = useState([]);
  const [UserDecrypt, setUserDecrypt] = useState([]);
  const [Encloading, setEncLoading] = useState(false);
  const [Decloading, setDecLoading] = useState(false);

  // declaring important array for storing datas
  let EncData = [];
  let dec = [];

  // changing some state
  const Enc = () => {
    setEncryption(true);
    setDecryption(false);
    setDescription(false);
  };

  //encryption happens here
  const Encrypt = () => {
    setEncLoading(true);
    for (let index = 0; index < UserEncryptTxt.length; index++) {
      let encrypt = UserEncryptTxt.toLocaleLowerCase().charCodeAt(index) + 666;
      EncData.push(encrypt);
    }
    console.log("Encrypted: " + EncData);
    setUserEncrypt(EncData);
  };

  // encryption happnes here
  const Decrypt = () => {
    setDecLoading(true);
    // UserDecryptTxt.join("");
    for (let index = 0; index < UserEncrypt.length; index++) {
      let encrypt = UserEncrypt[index] - 666;
      dec.push(encrypt);
    }
    // console.log("Decrypted: " + dec);
    let getbacktoriginal = [];
    for (let index = 0; index < dec.length; index++) {
      switch (dec[index]) {
        case 97:
          getbacktoriginal.push("a");
          break;
        case 98:
          getbacktoriginal.push("b");
          break;
        case 99:
          getbacktoriginal.push("c");
          break;
        case 100:
          getbacktoriginal.push("d");
          break;
        case 101:
          getbacktoriginal.push("e");
          break;
        case 102:
          getbacktoriginal.push("f");
          break;
        case 103:
          getbacktoriginal.push("g");
          break;
        case 104:
          getbacktoriginal.push("h");
          break;
        case 105:
          getbacktoriginal.push("i");
          break;
        case 106:
          getbacktoriginal.push("j");
          break;
        case 107:
          getbacktoriginal.push("k");
          break;
        case 108:
          getbacktoriginal.push("l");
          break;
        case 109:
          getbacktoriginal.push("m");
          break;
        case 110:
          getbacktoriginal.push("n");
          break;
        case 111:
          getbacktoriginal.push("o");
          break;
        case 112:
          getbacktoriginal.push("p");
          break;
        case 113:
          getbacktoriginal.push("q");
          break;
        case 114:
          getbacktoriginal.push("r");
          break;
        case 115:
          getbacktoriginal.push("s");
          break;
        case 116:
          getbacktoriginal.push("t");
          break;
        case 117:
          getbacktoriginal.push("u");
          break;
        case 118:
          getbacktoriginal.push("v");
          break;
        case 119:
          getbacktoriginal.push("w");
          break;
        case 120:
          getbacktoriginal.push("x");
          break;
        case 121:
          getbacktoriginal.push("y");
          break;
        case 122:
          getbacktoriginal.push("z");
          break;
        case 162:
          getbacktoriginal.push(" ");
          break;
        case 174:
          getbacktoriginal.push("");
          break;
        case 48:
          getbacktoriginal.push("0");
          break;
        case 49:
          getbacktoriginal.push("1");
          break;
        case 50:
          getbacktoriginal.push("2");
          break;
        case 51:
          getbacktoriginal.push("3");
          break;
        case 52:
          getbacktoriginal.push("4");
          break;
        case 53:
          getbacktoriginal.push("5");
          break;
        case 54:
          getbacktoriginal.push("6");
          break;
        case 55:
          getbacktoriginal.push("7");
          break;
        case 56:
          getbacktoriginal.push("8");
          break;
        case 57:
          getbacktoriginal.push("9");
          break;
        case 33:
          getbacktoriginal.push("!");
          break;
        case 64:
          getbacktoriginal.push("@");
          break;
        case 35:
          getbacktoriginal.push("#");
          break;
        case 36:
          getbacktoriginal.push("$");
          break;
        case 37:
          getbacktoriginal.push("%");
          break;
        case 94:
          getbacktoriginal.push("^");
          break;
        case 38:
          getbacktoriginal.push("&");
          break;
        case 42:
          getbacktoriginal.push("*");
          break;
        case 40:
          getbacktoriginal.push("(");
          break;
        case 41:
          getbacktoriginal.push(")");
          break;
        case 123:
          getbacktoriginal.push("{");
          break;
        case 125:
          getbacktoriginal.push("}");
          break;
        case 91:
          getbacktoriginal.push("[");
          break;
        case 93:
          getbacktoriginal.push("]");
          break;
        case 58:
          getbacktoriginal.push(":");
          break;
        case 59:
          getbacktoriginal.push(";");
          break;
        case 39:
          getbacktoriginal.push("'");
          break;
        case 124:
          getbacktoriginal.push("|");
          break;
        case 60:
          getbacktoriginal.push("<");
          break;
        case 44:
          getbacktoriginal.push(",");
          break;
        case 62:
          getbacktoriginal.push(">");
          break;
        case 46:
          getbacktoriginal.push(".");
          break;
        case 63:
          getbacktoriginal.push("?");
          break;
        case 47:
          getbacktoriginal.push("/");
          break;
        default:
          getbacktoriginal.push(" ");
          break;
      }
    }

    setUserDecrypt(getbacktoriginal.join(""));
  };

  // changing some state
  const Dec = () => {
    setDecryption(true);
    setEncryption(false);
    setDescription(false);
  };

  useEffect(() => {
    alert(
      "welcome to StaySafe Anywhere , now you are more secure than ever :)"
    );
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className={styles.banner}>
            <p className={styles.FirstTitle}>
              <span>
                <img
                  src={logo2}
                  alt="something went wrong"
                  className="img-fluid mx-2"
                  style={{ width: "60px" }}
                />
              </span>
              StaySafe Anywhere &#128578;
            </p>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <p className={styles.SecondTitle}>
                  stay secure{" "}
                  <span className="text-danger fw-bold">before</span> you are
                  sending data over the network with strong{" "}
                  <span className="fw-bold text-danger display-6">
                    Encryption
                  </span>{" "}
                  &{" "}
                  <span className="text-danger fw-bold display-6">
                    Decryption
                  </span>{" "}
                  methods
                </p>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="row m-3">
              <div className="col-md-6 mx-auto">
                <details
                  open
                  className="form-control border border-none p-3 mb-4"
                  style={{ backgroundColor: "transparent" }}
                >
                  <summary className="text-danger fw-bold h5">
                    How It Work ?
                  </summary>
                  <hr />
                  <b className="text-danger">
                    Straight Forward And Easy To Use With Simple GUI
                  </b>
                  <hr />
                  <p>
                    * <span className="text-danger fw-bold">first:-</span>{" "}
                    choose your situation wheather you want encrypt or decrypt
                    by clicking the one of the button.
                  </p>
                  <p>
                    * <span className="text-danger fw-bold">second:-</span>{" "}
                    after choosing your situation its open the inputs both for
                    encrypt(decrypt) with aproprate displayers
                  </p>
                  <p>
                    * <span className="text-danger fw-bold">third:-</span> if
                    you click encrypt button you have to enter plain text to be
                    encrypted after copy the encrypted data just click decrypt
                    button and paste it and click decrypt button after that your
                    will get your original data back.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-lg btn-danger m-3" onClick={Enc}>
            Encryption
          </button>
          <button className="btn btn-lg btn-success" onClick={Dec}>
            Decryption
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mx-auto m-3">
          {description && (
            <>
              <p className="text-dark my-3">
                Choose One Of the above opration depends on your situation
              </p>
              <img
                src={logo1}
                alt="something went wrong"
                className="img-fluid"
              />
            </>
          )}
        </div>
      </div>

      {/* main two cards */}
      {Encryption && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row m-3">
            <div className="col-md-4 mx-auto">
              <label htmlFor="text1" className="text-end text-muted">
                plain text
              </label>
              <textarea
                name="text1"
                id="text1"
                cols="10"
                rows="10"
                className="form-control border border-none"
                style={{ boxShadow: "1px 1px 16px #ad7d7d" }}
                placeholder="enter sth to be Encrypted..."
                onChange={(e) => setUserEncryptTxt(e.target.value)}
                required
              />
              <hr />
              <button
                className="btn btn-danger btn-lg w-100 mb-5"
                onClick={Encrypt}
              >
                {Encloading ? <>Encryption Done &#128578;</> : "Encrypt"}
              </button>
            </div>
            <div className="col-md-4 mx-auto">
              <label htmlFor="text1" className="text-end text-muted">
                Encrypted Data
              </label>
              <textarea
                value={UserEncrypt}
                name="text1"
                id="text1"
                cols="60"
                rows="10"
                className="form-control border border-none"
                style={{ boxShadow: "1px 1px 16px #ad7d7d" }}
                placeholder="Encrypted Data Display Here"
                required
              />
            </div>
          </div>
        </form>
      )}

      {/* another section */}
      {Decryption && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row m-3">
            <div className="col-md-4 mx-auto">
              <label htmlFor="text1" className="text-end text-muted">
                Encrypted Data
              </label>
              <textarea
                name="text2"
                id="text2"
                cols="60"
                rows="10"
                className="form-control border border-none"
                style={{ boxShadow: "1px 1px 12px #4b9265" }}
                placeholder="paste the encrypted data from encryption phase..."
                onChange={(e) => setUserDecryptTxt(e.target.value)}
                required
              />
              <hr />
              <button
                className="btn btn-success btn-lg w-100 mb-5"
                onClick={Decrypt}
              >
                {Decloading ? <>Decryption Done &#128578;</> : "Decrypt"}
              </button>
            </div>
            <div className="col-md-4 mx-auto">
              <label htmlFor="text1" className="text-end text-muted">
                Decrypted Data
              </label>
              <textarea
                value={UserDecrypt}
                name="text2"
                id="text2"
                cols="60"
                rows="10"
                className="form-control border border-none"
                style={{ boxShadow: "1px 1px 12px #4b9265" }}
                placeholder="Decrypted Data Display Here"
                required
              />
            </div>
          </div>
        </form>
      )}

      <div className="FOOTER">
        <div className="row">
          <div className="col-md-12 p-3 mx-auto   ">
            <code className="text-info">
              Copywrite &copy; 2023 | Developed By Mulugeta Nigus
            </code>
          </div>
        </div>
      </div>
    </>
  );
}

export default Encryption;
