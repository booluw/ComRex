// register modal component
Vue.component('wallet-modal', {
    template: '#wallet-template',
    props: ['balance']
});
var app = new Vue({
    el: '#app',
    data() {
        return {
            reg: false,
            tab: 'charcoal',
            mode: 'trade',
            exchanger: {
                from_name: '',
                from_amount: 0,
                to_name: '',
                to_amount: 0,
                trade_type: 'sell'
            },
            modal: false,
            account_balance: 0,
            wallet: false
        }
    },
    mounted() {
        this.account_balance = this.$refs.account.innerHTML
    },
    watch: {
        exchanger: {
            handler(){ this.exchange()},
            deep: true
        },
        modal: 'changeModal',
        wallet: 'changeModal'
    },
    methods: {
        submit: function(type) {
            document.location = 'dashboard.html?type='+type
        },
        exchange: function() {
            if(this.exchanger.from_name === this.exchanger.to_name) {
                this.exchanger.to_amount = this.exchanger.from_amount;
            }
            switch (this.exchanger.from_name) {
                case 'apple':
                    switch (this.exchanger.to_name) {
                        case 'rice':
                            this.exchanger.to_amount = this.exchanger.from_amount * 40;
                            break;
                        case 'chaff':
                            this.exchanger.to_amount = this.exchanger.from_amount * 120;
                            break;
                        case 'starch':
                            this.exchanger.to_amount = this.exchanger.from_amount * 70;
                            break;
                        case 'charcoal':
                            this.exchanger.to_amount = this.exchanger.from_amount * 100;
                            break;
                        default:
                            this.exchanger.to_amount = 0;
                    }
                    break;
                case 'rice':
                        switch (this.exchanger.to_name) {
                            case 'apple':
                                this.exchanger.to_amount = this.exchanger.from_amount / 40;
                                break;
                            case 'chaff':
                                this.exchanger.to_amount = this.exchanger.from_amount * 50;
                                break;
                            case 'starch':
                                this.exchanger.to_amount = this.exchanger.from_amount * 15;
                                break;
                            case 'charcoal':
                                this.exchanger.to_amount = this.exchanger.from_amount * 30;
                                break;
                            default:
                                this.exchanger.to_amount = 0;
                        }
                    break;
                case 'chaff':
                        switch (this.exchanger.to_name) {
                            case 'rice':
                                this.exchanger.to_amount = this.exchanger.from_amount / 50;
                                break;
                            case 'apple':
                                this.exchanger.to_amount = this.exchanger.from_amount / 100;
                                break;
                            case 'starch':
                                this.exchanger.to_amount = this.exchanger.from_amount * 3;
                                break;
                            case 'charcoal':
                                this.exchanger.to_amount = this.exchanger.from_amount * 10;
                                break;
                            default:
                                this.exchanger.to_amount = 0;
                        }
                    break;
                case 'charcoal':
                        switch (this.exchanger.to_name) {
                            case 'rice':
                                this.exchanger.to_amount = this.exchanger.from_amount * 130;
                                break;
                            case 'chaff':
                                this.exchanger.to_amount = this.exchanger.from_amount * 10;
                                break;
                            case 'starch':
                                this.exchanger.to_amount = this.exchanger.from_amount * 2;
                                break;
                            case 'apple':
                                this.exchanger.to_amount = this.exchanger.from_amount * 100;
                            default:
                                this.exchanger.to_amount = 0;
                        }
                    break;
                case 'starch':
                        switch (this.exchanger.to_name) {
                            case 'rice':
                                this.exchanger.to_amount = this.exchanger.from_amount / 15;
                                break;
                            case 'chaff':
                                this.exchanger.to_amount = this.exchanger.from_amount / 3;
                                break;
                            case 'apple':
                                this.exchanger.to_amount = this.exchanger.from_amount / 70;
                                break;  
                            case 'charcoal':
                                    this.exchanger.to_amount = this.exchanger.from_amount * 2;
                                    break;
                            default:
                                this.exchanger.to_amount = 0;
                        }
                    break;
                default:
                    console.log('Unknown');
                    break;
            }
            /*if (this.exchanger.from_name == 'apple' && this.exchanger.to_name == 'rice') {
                this.exchanger.to_amount = this.exchanger.from_amount / 4;
            } */
        },
        changeModal: function() {
            if (this.$refs.body.style.position != 'fixed') {
                this.$refs.body.style.position = 'fixed'
            } else {
                this.$refs.body.style.position = '';
            }
        }
    }
})