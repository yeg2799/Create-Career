<template>
            <div class="filter-box box">
            <div class="filter-box-header box_header">
              <h4 class="title">Filtrele</h4>
            </div>
            <div class="filter">
                <div class="select_country">
                    <div class="title">
                        <span>Ülke</span>
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option value="1" selected>Türkiye</option>
                        <option value="2">Almanya</option>
                        <option value="3">İspanya</option>
                    </select>
                </div>
                <div class="select_city">
                    <div class="title">
                        <span>Şehir</span>
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option value="1" selected>Adana</option>
                        <option value="2">İstanbul</option>
                        <option value="3">İzmir</option>
                    </select>
                </div>
                <div class="select_job">
                    <div class="title">
                        <span>İş</span>
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Frontend Developer</option>
                        <option value="2">Backedn Developer</option>
                        <option value="3">Doctor</option>
                    </select>
                </div>

                <div class="search_button">
                  <span>Filtrele</span>
                </div>
            </div>
          </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .filter-box{
    width: 100%;
    .filter{
      padding: 0px 10px;
      .form-select{
        border: none;
        border: 3px solid #efefef;
        width: 100%;
        padding: 4px 0px;
        border-radius: 5px;
      }
      .search_button{
        margin: 20px 0px 10px;
        font-size: 16px;
        border: 1px solid #CEBE79;
        padding: 5px 0px;
        background: #CEBE79;
        text-align: center;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        border-radius: 3px;
      }
    }
  }
</style>