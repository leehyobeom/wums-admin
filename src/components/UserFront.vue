<script lang='ts'>
import { defineComponent } from 'vue'
import gql from 'graphql-tag'

export default defineComponent({
  name: 'UserBrand',
  data () {
    return {
      coordinate: [{x:50, y:50}],
      currnetCoordinate: {
        x:50,
        y:50
      },
      intervalId: 0
    }
  },
  created (){
    window.addEventListener('beforeunload', this.setMouseCoordinate);
    document.addEventListener("mousemove", (event) => {
      this.currnetCoordinate = {
          x: Math.floor(event.clientX / window.innerWidth * 100),
          y: Math.floor(event.clientY / window.innerHeight * 100)
      }
    });
    this.intervalId = setInterval(()=>{
      this.coordinate.push(this.currnetCoordinate);
    },10);
  },
  methods: {
        async setMouseCoordinate() {
          await this.$apollo.mutate({
            mutation: gql`mutation create($cursorMonitor: [CursorMonitor!]!) {
              create(cursorMonitor: $cursorMonitor)
            }`,
            variables: {
                cursorMonitor: {
                  brand: "naver",
                  ip: "10.0.0.000",
                  date: "2022-01-04 10:10:10",
                  coordinate: this.coordinate
            },
          }
          })
          clearInterval(this.intervalId);
        }
    }
})
</script>
