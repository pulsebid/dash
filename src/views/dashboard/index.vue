<script>
function getChartColorsArray(colors) {
  colors = JSON.parse(colors);
  return colors.map(function (value) {
    var newValue = value.replace(" ", "");
    if (newValue.indexOf(",") === -1) {
      var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
      if (color) {
        color = color.replace(" ", "");
        return color;
      } else return newValue;
    } else {
      var val = value.split(',');
      if (val.length == 2) {
        var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
        rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
        return rgbaColor;
      } else {
        return newValue;
      }
    }
  });
}

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import {
  CountTo
} from "vue3-count-to";

import Layout from "../../layouts/main.vue";

import Revenue from "./revenue";
import SalesLocation from "./sales-location";

export default {
  components: {
    CountTo,
    Layout,
    flatPickr,
    Revenue,
    SalesLocation,
  },
  data() {
    return {
      title: "Dashboard",
      items: [{
        text: "Dashboards",
        href: "/",
      },
      {
        text: "Dashboard",
        active: true,
      },
      ],
      date: "2022-01-01 to 2022-01-31",
      config: {
        mode: "range",
      },
      series: [44, 55, 41, 17, 15],
      chartOptions: {
        labels: ["Direct", "Social", "Email", "Other", "Referrals"],
        chart: {
          height: 333,
          type: "donut",
        },
        legend: {
          position: "bottom",
        },
        stroke: {
          show: false,
        },
        dataLabels: {
          dropShadow: {
            enabled: false,
          },
        },
        colors: getChartColorsArray('["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]'),
      },
    };
  },
  methods: {
    rightcolumn() {
      if (document.querySelector('.layout-rightside-col').classList.contains('d-block')) {
        document.querySelector('.layout-rightside-col').classList.remove('d-block');
        document.querySelector('.layout-rightside-col').classList.add('d-none');
      } else {
        document.querySelector('.layout-rightside-col').classList.remove('d-none');
        document.querySelector('.layout-rightside-col').classList.add('d-block');
      }
    },

    resizerightcolumn() {
      const element = document.querySelector('.layout-rightside-col');

      if (element) {
        if (window.outerWidth < 1699) {
          element.classList.remove("d-block");
          element.classList.add("d-none");
        } else {
          element.classList.add("d-block");
          element.classList.remove("d-none");
        }
      }

      if (document.documentElement.getAttribute("data-layout") === "semibox") {
        element.classList.remove("d-block");
        element.classList.add("d-none");
      }
    },

    hiderightcolumn() {
      const element = document.querySelector('.layout-rightside-col');
      if (element.classList.contains('d-block')) {
        element.classList.remove("d-block");
        element.classList.add("d-none");
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.resizerightcolumn);
  }

};
</script>

<template>
  <Layout>
    <b-row>
      <b-col>
        <div class="h-100">
          <b-row class="mb-3 pb-1">
            <b-col cols="12">
              <div class="d-flex align-items-lg-center flex-lg-row flex-column">
                <div class="flex-grow-1">
                  <h4 class="fs-16 mb-1">Good Morning, Anna!</h4>
                  <p class="text-muted mb-0">
                    Here's what's happening with your store today.
                  </p>
                </div>
                <div class="mt-3 mt-lg-0">
                  <form action="javascript:void(0);">
                    <b-row class="g-3 mb-0 align-items-center">
                      <b-col sm="auto">
                        <div class="input-group">
                          <flat-pickr v-model="date" :config="config"
                            class="form-control border-0 dash-filter-picker shadow"></flat-pickr>

                          <div class="input-group-text bg-primary border-primary text-white">
                            <i class="ri-calendar-2-line"></i>
                          </div>
                        </div>
                      </b-col>
                      <div class="col-auto">
                        <b-button type="button" variant="soft-success">
                          <i class="ri-add-circle-line align-middle me-1"></i>
                          Add Product
                        </b-button>
                      </div>
                      <div class="col-auto">
                        <b-button type="button" variant="soft-info" class="btn-icon waves-effect layout-rightside-btn"
                          @click="rightcolumn">
                          <i class="ri-pulse-line"></i>
                        </b-button>
                      </div>
                    </b-row>
                  </form>
                </div>
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col xl="3" md="6">
              <b-card no-body class="card-animate">
                <b-card-body>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        Total Earnings
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-success fs-14 mb-0">
                        <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                        +16.24 %
                      </h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        $<count-to :startVal='0' :endVal='559' :duration='5000'></count-to>k
                      </h4>
                      <b-link href="" class="text-decoration-underline">View net earnings</b-link>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-soft-success rounded fs-3">
                        <i class="bx bx-dollar-circle text-success"></i>
                      </span>
                    </div>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col xl="3" md="6">
              <b-card no-body class="card-animate">
                <b-card-body>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        Orders
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-danger fs-14 mb-0">
                        <i class="ri-arrow-right-down-line fs-13 align-middle"></i>
                        -3.57 %
                      </h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        <count-to :startVal='0' :endVal='36894' :duration='5000'></count-to>
                      </h4>
                      <b-link href="" class="text-decoration-underline">View all orders</b-link>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-soft-info rounded fs-3">
                        <i class="bx bx-shopping-bag text-info"></i>
                      </span>
                    </div>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col xl="3" md="6">
              <b-card no-body class="card-animate">
                <b-card-body>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        Customers
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-success fs-14 mb-0">
                        <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                        +29.08 %
                      </h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        <count-to :startVal='0' :endVal='183' :duration='5000'></count-to>M

                      </h4>
                      <b-link href="" class="text-decoration-underline">See details</b-link>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-soft-warning rounded fs-3">
                        <i class="bx bx-user-circle text-warning"></i>
                      </span>
                    </div>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col xl="3" md="6">
              <b-card no-body class="card-animate">
                <b-card-body>
                  <div class="d-flex align-items-center">
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-uppercase fw-medium text-muted text-truncate mb-0">
                        My Balance
                      </p>
                    </div>
                    <div class="flex-shrink-0">
                      <h5 class="text-muted fs-14 mb-0">+0.00 %</h5>
                    </div>
                  </div>
                  <div class="d-flex align-items-end justify-content-between mt-4">
                    <div>
                      <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                        $<count-to :startVal='0' :endVal='165' :duration='5000'></count-to>k
                      </h4>
                      <b-link href="" class="text-decoration-underline">Withdraw money</b-link>
                    </div>
                    <div class="avatar-sm flex-shrink-0">
                      <span class="avatar-title bg-soft-primary rounded fs-3">
                        <i class="bx bx-wallet text-primary"></i>
                      </span>
                    </div>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>

          <b-row>
            <b-col xl="8">
              <Revenue />
            </b-col>

            <b-col xl="4">
              <SalesLocation />
            </b-col>
          </b-row>

          <b-row>
            <b-col xl="6">
              <b-card no-body>
                <b-card-header class="align-items-center d-flex">
                  <b-card-title class="mb-0 flex-grow-1"> Best Selling Products </b-card-title>
                  <div class="flex-shrink-0">
                    <div class="dropdown card-header-dropdown">
                      <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span class="text-muted">Today<i
                            class="mdi mdi-chevron-down ms-1"></i></span>
                      </b-link>
                      <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#">Today</b-link>
                        <b-link class="dropdown-item" href="#">Yesterday</b-link>
                        <b-link class="dropdown-item" href="#">Last 7 Days</b-link>
                        <b-link class="dropdown-item" href="#">Last 30 Days</b-link>
                        <b-link class="dropdown-item" href="#">This Month</b-link>
                        <b-link class="dropdown-item" href="#">Last Month</b-link>
                      </div>
                    </div>
                  </div>
                </b-card-header>

                <b-card-body>
                  <div class="table-responsive table-card">
                    <table class="table table-hover table-centered align-middle table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@/assets/images/products/img-1.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <router-link to="/ecommerce/product-details" class="text-reset">Branded T-Shirts
                                  </router-link>
                                </h5>
                                <span class="text-muted">24 Apr 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$29.00</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">62</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">510</h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$1,798</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@/assets/images/products/img-2.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <router-link to="/ecommerce/product-details" class="text-reset">Bentwood Chair
                                  </router-link>
                                </h5>
                                <span class="text-muted">19 Mar 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$85.20</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">35</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">
                              <b-badge variant="soft-danger" class="badge-soft-danger">Out of stock</b-badge>
                            </h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$2982</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@/assets/images/products/img-3.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <router-link to="/ecommerce/product-details" class="text-reset">Borosil Paper Cup
                                  </router-link>
                                </h5>
                                <span class="text-muted">01 Mar 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$14.00</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">80</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">749</h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$1120</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@/assets/images/products/img-4.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <router-link to="/ecommerce/product-details" class="text-reset">One Seater Sofa
                                  </router-link>
                                </h5>
                                <span class="text-muted">11 Feb 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$127.50</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">56</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">
                              <b-badge variant="soft-danger" class="badge-soft-danger">Out of stock</b-badge>
                            </h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$7140</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar-sm bg-light rounded p-1 me-2">
                                <img src="@/assets/images/products/img-5.png" alt="" class="img-fluid d-block" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1">
                                  <router-link to="/ecommerce/product-details" class="text-reset">Stillbird Helmet
                                  </router-link>
                                </h5>
                                <span class="text-muted">17 Jan 2021</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$54</h5>
                            <span class="text-muted">Price</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">74</h5>
                            <span class="text-muted">Orders</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">805</h5>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <h5 class="fs-14 my-1 fw-normal">$3996</h5>
                            <span class="text-muted">Amount</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <b-row class="align-items-center mt-4 pt-2 justify-content-between text-center text-sm-start">
                    <b-col sm>
                      <div class="text-muted">
                        Showing <span class="fw-semibold">5</span> of
                        <span class="fw-semibold">25</span> Results
                      </div>
                    </b-col>
                    <b-col sm="auto" class="mt-3 mt-sm-0">
                      <ul class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                        <li class="page-item disabled">
                          <b-link href="#" class="page-link">←</b-link>
                        </li>
                        <li class="page-item">
                          <b-link href="#" class="page-link">1</b-link>
                        </li>
                        <li class="page-item active">
                          <b-link href="#" class="page-link">2</b-link>
                        </li>
                        <li class="page-item">
                          <b-link href="#" class="page-link">3</b-link>
                        </li>
                        <li class="page-item">
                          <b-link href="#" class="page-link">→</b-link>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col xl="6">
              <b-card no-body class="card-height-100">
                <b-card-header class="align-items-center d-flex">
                  <b-card-title class="mb-0 flex-grow-1">Top Sellers</b-card-title>
                  <div class="flex-shrink-0">
                    <div class="dropdown card-header-dropdown">
                      <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <span class="text-muted">Report<i class="mdi mdi-chevron-down ms-1"></i></span>
                      </b-link>
                      <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#">Download Report</b-link>
                        <b-link class="dropdown-item" href="#">Export</b-link>
                        <b-link class="dropdown-item" href="#">Import</b-link>
                      </div>
                    </div>
                  </div>
                </b-card-header>

                <b-card-body>
                  <div class="table-responsive table-card">
                    <table class="table table-centered table-hover align-middle table-nowrap mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/companies/img-1.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div>
                                <h5 class="fs-14 my-1 fw-medium">
                                  <router-link to="/ecommerce/seller-details" class="text-reset">iTest Factory
                                  </router-link>
                                </h5>
                                <span class="text-muted">Oliver Tyler</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Bags and Wallets</span>
                          </td>
                          <td>
                            <p class="mb-0">8547</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$541200</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              32%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/companies/img-2.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-grow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <router-link to="/ecommerce/seller-details" class="text-reset">Digitech Galaxy
                                  </router-link>
                                </h5>
                                <span class="text-muted">John Roberts</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Watches</span>
                          </td>
                          <td>
                            <p class="mb-0">895</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$75030</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              79%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/companies/img-3.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-gow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <router-link to="/ecommerce/seller-details" class="text-reset">Nesta Technologies
                                  </router-link>
                                </h5>
                                <span class="text-muted">Harley Fuller</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Bike Accessories</span>
                          </td>
                          <td>
                            <p class="mb-0">3470</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$45600</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              90%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/companies/img-8.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-grow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <router-link to="/ecommerce/seller-details" class="text-reset">Zoetic Fashion
                                  </router-link>
                                </h5>
                                <span class="text-muted">James Bowen</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Clothes</span>
                          </td>
                          <td>
                            <p class="mb-0">5488</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$29456</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              40%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/companies/img-5.png" alt="" class="avatar-sm p-2" />
                              </div>
                              <div class="flex-grow-1">
                                <h5 class="fs-14 my-1 fw-medium">
                                  <router-link to="/ecommerce/seller-details" class="text-reset">Meta4Systems
                                  </router-link>
                                </h5>
                                <span class="text-muted">Zoe Dennis</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="text-muted">Furniture</span>
                          </td>
                          <td>
                            <p class="mb-0">4100</p>
                            <span class="text-muted">Stock</span>
                          </td>
                          <td>
                            <span class="text-muted">$11260</span>
                          </td>
                          <td>
                            <h5 class="fs-14 mb-0">
                              57%<i class="ri-bar-chart-fill text-success fs-16 align-middle ms-2"></i>
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <b-row class="align-items-center mt-4 pt-2 justify-content-between text-center text-sm-start">
                    <b-col sm>
                      <div class="text-muted">
                        Showing <span class="fw-semibold">5</span> of
                        <span class="fw-semibold">25</span> Results
                      </div>
                    </b-col>
                    <b-col sm="auto" class="mt-3 mt-sm-0">
                      <ul class="pagination pagination-separated pagination-sm mb-0 justify-content-center">
                        <li class="page-item disabled">
                          <b-link href="#" class="page-link">←</b-link>
                        </li>
                        <li class="page-item">
                          <b-link href="#" class="page-link">1</b-link>
                        </li>
                        <li class="page-item active">
                          <b-link href="#" class="page-link">2</b-link>
                        </li>
                        <li class="page-item">
                          <b-link href="#" class="page-link">3</b-link>
                        </li>
                        <li class="page-item">
                          <b-link href="#" class="page-link">→</b-link>
                        </li>
                      </ul>
                    </b-col>
                  </b-row>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>

          <b-row>
            <b-col xl="4">
              <b-card no-body class="card-height-100">
                <b-card-header class="align-items-center d-flex">
                  <b-card-title class="mb-0 flex-grow-1"> Store Visits by Source </b-card-title>
                  <div class="flex-shrink-0">
                    <div class="dropdown card-header-dropdown">
                      <b-link class="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <span class="text-muted">Report<i class="mdi mdi-chevron-down ms-1"></i></span>
                      </b-link>
                      <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#">Download Report</b-link>
                        <b-link class="dropdown-item" href="#">Export</b-link>
                        <b-link class="dropdown-item" href="#">Import</b-link>
                      </div>
                    </div>
                  </div>
                </b-card-header>

                <b-card-body>
                  <apexchart class="apex-charts" dir="ltr" :series="series" :options="chartOptions"></apexchart>
                </b-card-body>
              </b-card>
            </b-col>

            <b-col xl="8">
              <b-card no-body>
                <b-card-header class="align-items-center d-flex">
                  <b-card-title class="mb-0 flex-grow-1">Recent Orders</b-card-title>
                  <div class="flex-shrink-0">
                    <b-button type="button" variant="soft-info" size="sm">
                      <i class="ri-file-list-3-line align-middle"></i> Generate
                      Report
                    </b-button>
                  </div>
                </b-card-header>

                <b-card-body>
                  <div class="table-responsive table-card">
                    <table class="table table-borderless table-centered align-middle table-nowrap mb-0">
                      <thead class="text-muted table-light">
                        <tr>
                          <th scope="col">Order ID</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Vendor</th>
                          <th scope="col">Status</th>
                          <th scope="col">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <router-link to="/ecommerce/order-details" class="fw-medium link-primary">#VZ2112
                            </router-link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/users/avatar-1.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Alex Smith</div>
                            </div>
                          </td>
                          <td>Clothes</td>
                          <td>
                            <span class="text-success">$109.00</span>
                          </td>
                          <td>Zoetic Fashion</td>
                          <td>
                            <b-badge variant="soft-success" class="badge-soft-success">Paid</b-badge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              5.0<span class="text-muted fs-11 ms-1">(61 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/ecommerce/order-details" class="fw-medium link-primary">#VZ2111
                            </router-link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/users/avatar-2.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Jansh Brown</div>
                            </div>
                          </td>
                          <td>Kitchen Storage</td>
                          <td>
                            <span class="text-success">$149.00</span>
                          </td>
                          <td>Micro Design</td>
                          <td>
                            <b-badge variant="soft-warning" class="badge-soft-warning">Pending</b-badge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.5<span class="text-muted fs-11 ms-1">(61 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/ecommerce/order-details" class="fw-medium link-primary">#VZ2109
                            </router-link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/users/avatar-3.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Ayaan Bowen</div>
                            </div>
                          </td>
                          <td>Bike Accessories</td>
                          <td>
                            <span class="text-success">$215.00</span>
                          </td>
                          <td>Nesta Technologies</td>
                          <td>
                            <b-badge variant="soft-success" class="badge-soft-success">Paid</b-badge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.9<span class="text-muted fs-11 ms-1">(89 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/ecommerce/order-details" class="fw-medium link-primary">#VZ2108
                            </router-link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/users/avatar-4.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Prezy Mark</div>
                            </div>
                          </td>
                          <td>Furniture</td>
                          <td>
                            <span class="text-success">$199.00</span>
                          </td>
                          <td>Syntyce Solutions</td>
                          <td>
                            <b-badge variant="soft-danger" class="badge-soft-danger">Unpaid</b-badge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.3<span class="text-muted fs-11 ms-1">(47 votes)</span>
                            </h5>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <router-link to="/ecommerce/order-details" class="fw-medium link-primary">#VZ2107
                            </router-link>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="flex-shrink-0 me-2">
                                <img src="@/assets/images/users/avatar-6.jpg" alt="" class="avatar-xs rounded-circle" />
                              </div>
                              <div class="flex-grow-1">Vihan Hudda</div>
                            </div>
                          </td>
                          <td>Bags and Wallets</td>
                          <td>
                            <span class="text-success">$330.00</span>
                          </td>
                          <td>iTest Factory</td>
                          <td>
                            <b-badge variant="soft-success" class="badge-soft-success">Paid</b-badge>
                          </td>
                          <td>
                            <h5 class="fs-14 fw-medium mb-0">
                              4.7<span class="text-muted fs-11 ms-1">(161 votes)</span>
                            </h5>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </Layout>
</template>