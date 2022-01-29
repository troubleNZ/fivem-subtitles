const app = new Vue({
    el: '#app',
    data: {
        display: null,
        color: null,
        tts: false,
        speed: null,
        text: [],
        timeouts: []
    },
    mounted() {
        this.listener = window.addEventListener('message', ({ data }) => {
            if (data.action == 'open')
                return this.drawText(data);
        });
    },
    methods: {
        resetSettings() {
            this.display = null;
            this.text = [];
            
            for (let i = 0; i <= this.timeouts.length; i++)
                clearTimeout(this.timeouts[i]);
        },
        speech(text) {
            if (this.tts && text.length > 0) {
                let message = new SpeechSynthesisUtterance(text);
                
                message.pitch = 1;
                message.volume = 0.7;
                message.rate = 1;

                speechSynthesis.speak(message);
            }
        },
        drawText(data) {
            this.resetSettings();

            this.text = data.text;
            this.cooldown = data.cooldown;
            this.color = data.color;
            this.tts = data.tts;
            this.speed = data.speed;

            this.startTextAnimation(0);
        },
        typeWriter(text, index, callback) {
            if (index < text.length) {
                this.display = `${text.substring(0, index + 1)}`
                this.timeouts.push(setTimeout(() => this.typeWriter(text, index + 1, callback), this.speed));
            } else if (typeof callback == 'function')
                this.timeouts.push(setTimeout(callback, this.cooldown));
        },
        startTextAnimation(i) {
            if (!this.text[i])
                return this.timeouts.push(setTimeout(() => this.text = [], this.cooldown));

            if (i < this.text[i].length) {
                this.typeWriter(this.text[i], 0, () => this.startTextAnimation(i + 1));
                this.speech(this.text[i]);
            }
        }
    }
});
