<template>
  <div class="row">
    <div class="col s12 12 offset-14">
      <div class="card">
        <div class="card-action blue white-text">
          <h3>Contact Form</h3>
        </div>
        <br />
        <div class="card-content">
          <div class="form-field: center-align">
            <div class="input-field">
              <i class="material-icons prefix">person</i>
              <input type="text" placeholder="Your name" size="60px" />
            </div>
            <br />

            <div class="input-field">
              <i class="material-icons prefix">call</i>
              <input type="text" placeholder="MobileNumber" size="60px" />
            </div>
            <br />

            <div class="input-field">
              <!-- <i class="material-icons prefix">business_center</i> -->
              <select>
                <option value disabled selected>Choose your Occupation</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <br />

            <a class="waves-effect waves-light btn-large blue">ADD</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
export default {
  mounted() {
    var elems = document.querySelectorAll('select')
    this.selectinstances = M.FormSelect.init(elems, {})
  }
}
</script>