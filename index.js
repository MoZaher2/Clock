        let numHour = new Date().getHours() % 12
        let numMinute = new Date().getMinutes()
        let numSecond = new Date().getSeconds()

        let hour = (numHour) * 5 * 6 + (Math.round((new Date().getMinutes() / 60) * 5)) * 6
        let minute = numMinute * 6
        let second = numSecond * 6 + 6

        let h = document.getElementsByClassName("h")[0];
        let m = document.getElementsByClassName("m")[0];
        let s = document.getElementsByClassName("s")[0];

        let numH = document.getElementsByClassName("numH")[0];
        let numM = document.getElementsByClassName("numM")[0];
        let numS = document.getElementsByClassName("numS")[0];

        s.style.rotate = `${second}deg`;
        m.style.rotate = `${minute}deg`;
        h.style.rotate = `${hour}deg`;

        setInterval(() => {
            let hour = (new Date().getHours() % 12) * 5 * 6 + (Math.round((new Date().getMinutes() / 60) * 5)) * 6
            let minute = new Date().getMinutes() * 6
            let second = new Date().getSeconds() * 6

            s.style.rotate = `${second}deg`;
            m.style.rotate = `${minute}deg`;
            h.style.rotate = `${hour}deg`;


            // 
            numH.innerHTML = `${new Date().getHours() > 12 ? (new Date().getHours() % 12 < 10 ? `0${new Date().getHours() % 12}` : new Date().getHours() % 12) : (new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours())}`
            numM.innerHTML = `${(new Date().getMinutes()) < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`
            numS.innerHTML = `${(new Date().getSeconds()) < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()}`
            // 
        }, 1000)
