<template>
  	<canvas id="wave"  ref='wave'></canvas>
</template>
<script>
export default {
    name: 'index',
    data () {
        return{
            width:window.outerWidth,
            height:400,
            devicePixelRatio:1,
            MAX:2,
            run:false,
            ctx:'',
            K :1,
            F: 15,
            speed:0.1,
            noise:30,
            phase: 0
        }
    },
    created () {       
    },
    mounted () {
      this.setInit();   
      this.setSpeed(0.01);
      this.start()
    },
    methods:{
        setInit(){
            this.width = this.devicePixelRatio * this.width
            this.height = this.devicePixelRatio * this.height
            this.MAX = (this.height / 2) - 4;
            this.$el.width = this.width;
            this.$el.height = this.height;
            this.ctx = this.$el.getContext("2d");
            this.run = false
        },
        _globalAttenuationFn (x) {
            return Math.pow(this.K * 4 / (this.K * 4 + Math.pow(x, 4)), this.K * 2)
        },
        _drawLine (attenuation, color, width, noise, F) {
                this.ctx.moveTo(0, 0);
                this.ctx.beginPath();
                this.ctx.strokeStyle = color;
                this.ctx.lineWidth = width || 1;
                var x, y;
                F = F || this.F;
                noise = noise * this.MAX || this.noise;
                for (var i = -this.K; i <= this.K; i += 0.01) {
                    i = parseFloat(parseFloat(i).toFixed(2));
                    x = this.width * ((i + this.K) / (this.K * 2));
                    y = this.height / 2 + noise * Math.pow(Math.sin(i * 10 * attenuation), 1) * Math.sin(F * i - this.phase);
                    this.ctx.lineTo(x, y)
                }
                this.ctx.lineTo(this.width, this.height);
                this.ctx.lineTo(0, this.height);
                this.ctx.fillStyle = color;
                this.ctx.fill()
        },
        _clear () {
                this.ctx.globalCompositeOperation = "destination-out";
                this.ctx.fillRect(0, 0, this.width, this.height);
                this.ctx.globalCompositeOperation = "source-over"
        },
         _draw () {
                if (!this.run) {
                    return
                }
                this.phase = (this.phase + this.speed) % (Math.PI * 64);
                this._clear();
                this._drawLine(0.1, "rgba(255,0,103,0.5)", 0.05, 0.05, 10);
                this._drawLine(0.1, "rgba(255,0,103,0.5)", 0.05, 0.05, 4);
                requestAnimationFrame(this._draw.bind(this), 1000)
            },
            start () {
                this.phase = 0;
                this.run = true;
                this._draw()
            },
            stop () {
                this.run = false;
                this._clear()
            },
            setNoise (v) {
                this.noise = Math.min(v, 1) * this.MAX
            },
            setSpeed (v) {
                this.speed = v
            },
            set (noise, speed) {
                this.setNoise(noise);
                this.setSpeed(speed)
            },
            bl (val) {
                return 1920 / 30
            }
    }
}
</script>
<style lang='less'>
#wave{
    transform: rotate(180deg)
}
</style>
