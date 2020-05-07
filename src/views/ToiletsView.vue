<template>
  <div>
    <!-- <navbar></navbar> -->
    <!-- {{id}} -->
    <!-- <div v-if="person">{{person.name}}</div> -->
    <div>
      <div class="row home">
        <div class="container">
          <div class="progress" v-if="loading">
            <div class="indeterminate"></div>
          </div>

          <div v-else class="card z-depth-3" style="border-radius:20px;margin-top:40px">
            <div class="card-content">
              <div>
                <span class="left card-title">Toilet Name:</span>
                <br />
                <br />
                <h4
                  class="center"
                  style="margin:20px 0 20px 0;"
                  v-if="person"
                >{{person.toilet_name}}</h4>
                <p>{{person.toilet_location}}</p>
              </div>

              <div style="margin-bottom:10px">
                <table class="centered">
                  <thead>
                    <tr>
                      <th>Start Time</th>
                      <th>End Time</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{{person.start_time}}</td>
                      <td>{{person.end_time}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style="margin:30px 0 10px 0">
                <p>Scheduled Time : 1150</p>
              </div>
              <div style="margin:20px 0 10px 0">
                <span class="left card-title">Janitor Name:</span>
                <br />
                <h4 class="center" style="margin:20px 0 30px 0;" v-if="person">{{person.jname}}</h4>
              </div>

              <div>
                <a class="waves-effect waves-light btn blue" style="border-radius:15px">
                  <i class="material-icons left">phone</i>Call
                </a>
              </div>

              <div style="margin:20px 0 10px 0">
                <span class="center card-title">Issues Reported:</span>
                <div class="row" style="margin:20px 0 0 0 ">
                  <div>
                    <!-- <div class="chip">{{issue.issuename}}</div> -->
                    <p
                      v-for="issue in issues"
                      :key="issue.issuename"
                      class="chip"
                    >{{issue.issuename}}</p>
                    <!-- <div class="chip">{{person.address.street}}</div>
                    <div class="chip">{{person.address.city}}</div>
                    <div class="chip">{{person.website}}</div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import navbar from './Nav'
import axios from 'axios'

export default {
  props: ['id'],
  data: function() {
    return {
      person: null,
      loading: true,
      issues: []
    }
  },
  methods: {
    getdata() {
      var that = this
      axios
        .get('http://localhost:8000/items/' + this.id)
        .then(function(response) {
          // handle success
          that.person = response.data
          console.log(response)
          that.issues = response.data.issues
          // console.log(response.data.issues.issuename)
          that.loading = false
        })
    }
  },
  mounted: function() {
    this.getdata()
  }
}
</script>

<style scoped>
.progress .indeterminate {
  background-color: #3f78df;
}
.progress {
  background-color: transparent;
}
.home {
  margin-bottom: 0px;
}
</style>
