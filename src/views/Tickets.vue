<template>
  <div>
    <div class="container">
      <div class="card z-depth-3" style="border-radius:20px;margin-top:40px">
        <div class="card-content">
          <span class="badge">Total: 4</span>
          <div>
            <div class="row">
              <router-link v-bind:to="'/ticketsview/'+JSON.stringify(waters)">
                <h4 class="left" style="margin:20px 0 0 0;">Water</h4>
              </router-link>
            </div>
            <div class="row">
              <div v-for="water in waters.slice(0,5)" :key="water.id">
                <ul>
                  <li>{{water.toilet_location}}</li>
                </ul>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <div class="card z-depth-3" style="border-radius:20px;margin-top:40px">
        <div class="card-content">
          <span class="badge">Total: 4</span>
          <div>
            <div class="row">
              <h4 class="left" style="margin:20px 0 0 0;">Issue Name</h4>
            </div>
            <div class="row">
              <div v-for="ticket in filterItems(tickets)" :key="ticket.index">
                <p>{{ticket.name}}</p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <div class="card z-depth-3" style="border-radius:20px;margin-top:40px">
        <div class="card-content">
          <span class="badge">Total: 4</span>
          <div>
            <div class="row">
              <h4 class="left" style="margin:20px 0 0 0;">Issue Name</h4>
            </div>
            <div class="row">
              <div v-for="ticket in filterItems(tickets)" :key="ticket.index">
                <p>{{ticket.name}}</p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <div class="card z-depth-3" style="border-radius:20px;margin-top:40px">
        <div class="card-content">
          <span class="badge">Total: 4</span>
          <div>
            <div class="row">
              <h4 class="left" style="margin:20px 0 0 0;">Issue Name</h4>
            </div>
            <div class="row">
              <div v-for="ticket in filterItems(tickets)" :key="ticket.index">
                <p>{{ticket.name}}</p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      tickets: [],
      waters: [],
      totwaters: []
    }
  },
  methods: {
    getdata() {
      var that = this
      //   var responseData
      axios.get('http://localhost:8000/tickets').then(function(response) {
        that.tickets = response.data
        //   responseData = response
        console.log(that.tickets)
        that.totwaters = that.tickets
        console.log(that.totwaters)
        // var count = 0
        var j = 0
        for (var i = 0; i < that.tickets.length; i++) {
          if (that.tickets[i].department == 'plumbing') {
            // count++
            // console.log(i)
            // console.log(that.tickets[i])
            that.waters[j] = that.tickets[i]
            // console.log(j)
            j++
            // console.log(that.waters)
          }
          //   if (count == 5) {
          //     break
          //   }
        }
        // console.log(that.tickets.department)
        console.log(that.waters)
        console.log(that.tickets.length)
        console.log('plum' + that.waters.length)
        //   console.log(that.tickets[that.tickets.length - 1])
      })
    },

    filterItems: function(tickets) {
      return tickets.filter(function(ticket) {
        return ticket.id < 5
      })
    }
  },
  mounted() {
    this.getdata()
  }
}
</script>
<style scoped>
span.badge {
  background-color: #3f78df;
  color: white;
  border-radius: 15px;
}
</style>