<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div
            style="
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <v-card class="mt-n16">
              <v-card-title> Vuex Demo </v-card-title>
              <v-card-text class="text-center">
                <h1 v-html="accountBalance"></h1>
                <h1 v-html="dollarAccountBalance" class="my-4"></h1>
                <v-text-field
                  v-model="amount"
                  type="number"
                  label="Amount"
                ></v-text-field>
                <v-alert text type="info">
                  Current Exchange Rate is:
                  <strong>{{ exchangeRate }} Naira</strong> =
                  <strong>1 Euro</strong>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        depressed
                        v-on="on"
                        @click="getCurrentExchangeRate"
                        class="warning ml-4 rounded-xl"
                        v-bind="attrs"
                      >
                        <v-icon left>mdi-update</v-icon> refresh
                      </v-btn>
                    </template>
                    <span>Refresh Exchange Rate</span>
                  </v-tooltip>
                </v-alert>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  @click="withdrawAmount(amount)"
                  class="primary white--text"
                >
                  Widthraw</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn @click="depositAmount(amount)" class="error white--text"
                  >Deposit</v-btn
                >
              </v-card-actions>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters, mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      // accountBalance: 0,
      amount: 0,
    };
  },
  computed: {
    ...mapState(["exchangeRate"]),
    ...mapGetters(["accountBalance", "dollarAccountBalance"]),
  },
  methods: {
    ...mapActions(["getCurrentExchangeRate"]),
    ...mapMutations({
      depositAmount: "DEPOSIT_AMOUNT",
      withdrawAmount: "WITHDRAW_AMOUNT",
    }),
  },
  mounted() {
    console.log(this.$store.getters);
  },
};
</script>
