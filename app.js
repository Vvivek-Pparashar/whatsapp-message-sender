const qrcode = require("qrcode-terminal");
// const { MessageMedia } = require("whatsapp-web.js");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const fs = require("fs");
const { parse } = require("csv-parse");
const { resolve } = require("path");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

let arr = [];

// fs.createReadStream("learn.csv")
//   .pipe(parse({ delimiter: ",", from_line: 1 }))
//   .on("data", function (row) {
//     const number = row[0];

//     arr.push(number);
//   })
//   .on("end", function () {
//     console.log("finished");
//   })
//   .on("error", function (error) {
//     console.log("error.message");
//   });

client.on("ready", () => {
  console.log("vivekisgr8");

  let n = arr.length;
  n = 2;

  // for (let i = 0; i < n; i++) {
    // console.log(arr[i]);
    // if (arr[i].includes("E") || arr[i].includes(".")) {
    //   continue;
    // }

    // client.isRegisteredUser(`91${arr[i]}@c.us`).then((value)=>{
    //   if(value){
    //     client.sendMessage(`91${arr[i]}@c.us`, "vivekisgr8");
    //   }
    // })

    // const media = new MessageMedia('image/png', base64Image);
    // const media = new MessageMedia.fromFilePath("./Profile.png", base64Image);
    media = MessageMedia.fromFilePath('news3.jpg');
    // client.sendMessage("918766354966@c.us", media);
    client.sendMessage(
      "918766354966@c.us",
      media,
      {
        caption:"vivekisgr8"
      }
    );

    fs.writeFile('./test.txt', media.data, err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });


  
    // console.log(media)
});

client.initialize();
