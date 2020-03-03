/* eslint-disable no-reserved-keys */
export default {
    value: {
        url: {
            wordpress_base: 'http://localhost/wordpress',
            admin_path: '/wp-admin',
            plugins_path: '/wp-admin/plugins.php',
            order_path_1: '/wp-admin/post.php?post=',
            order_path_2: '&action=edit',
            product_path: '/?product=test',
            woocommerce: 'http://localhost/wordpress/wp-admin/index.php?page=wc-setup',
            non_pci:
                '/wp-admin/admin.php?page=wc-settings&tab=checkout&section=wc_checkout_non_pci',
            pci: '/wp-admin/admin.php?page=wc-settings&tab=checkout&section=wc_checkout_pci'
        },
        admin: {
            username: 'checkout',
            password: 'Checkout17',
            three_d_password: 'Checkout1!',
            pci_secret_key: 'sk_test_d084c5ee-8407-4b10-ae46-f730ad7fe6b0',
            pci_private_shared_key: '66265906-1ff3-4b78-a3aa-9837a303e8e6',
            non_pci_secret_key: 'sk_test_fe1ea74c-e9be-4191-9781-76ec04523e29',
            non_pci_public_key: 'pk_test_537c069c-9533-47e3-9a4a-14c55b9781ee',
            non_pci_private_shared_key: 'fc8b91da-a59d-480e-93d7-3dd590948b04'
        },
        guest: {
            email: 'john@smith.com',
            firstname: 'John',
            lastname: 'Smith',
            street: '42 Ealing Broadway',
            town: 'London',
            postcode: 'w1w 8sy',
            phone: '07123456789'
        },
        customer: {
            email: 'test@checkout.com',
            firstname: 'Test',
            lastname: 'Checkout',
            street: '1 Wall Street',
            town: 'London',
            country: 'GB',
            phone: '07987654321',
            password: 'Checkout17'
        },
        card: {
            visa: {
                card_number: '4242424242424242',
                month: '06',
                year: '18',
                cvv: '100'
            },
            mastercard: {
                card_number: '5436031030606378',
                month: '06',
                year: '25',
                cvv: '257'
            },
            amex: {
                card_number: '345678901234564',
                month: '06',
                year: '25',
                cvv: '1051'
            },
            diners: {
                card_number: '30123456789019',
                month: '06',
                year: '25',
                cvv: '257'
            },
            jcb: {
                card_number: '3530111333300000',
                month: '06',
                year: '18',
                cvv: '100'
            },
            discover: {
                card_number: '6011111111111117',
                month: '06',
                year: '18',
                cvv: '100'
            }
        },
        customisation: {
            lightbox_url:
                'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png',
            theme: '#8F1D21',
            js_title: 'Test',
            widget_color: '#9B59B6',
            form_button_color: '#7A942E',
            form_label_color: '#F4D03F',
            opacity: 0.6
        }
    },
    selector: {
        frontend: {
            order: {
                add: '.single_add_to_cart_button',
                view_cart: 'a.button',
                go_to_checkout: '.checkout-button',
                firstname: '#billing_first_name',
                lastname: '#billing_last_name',
                street: '#billing_address_1',
                town: '#billing_city',
                postcode: '#billing_postcode',
                phone: '#billing_phone',
                email: '#billing_email',
                non_pci_option: 'li.wc_payment_method:nth-child(2)',
                non_pci_save_card: '#save-card-checkbox',
                pci_option: 'li.wc_payment_method:nth-child(3)',
                place_order: '#place_order',
                js_new_card: '.checkout-new-card-radio',
                pci_new_card:
                    '#woocommerce_checkout_pci-cc-form > ul:nth-child(1) > li:nth-child(2) > p:nth-child(1) > input:nth-child(1)',
                pci_saved_card:
                    '#woocommerce_checkout_pci-cc-form > ul:nth-child(1) > li:nth-child(1) > p:nth-child(1) > input:nth-child(1)',
                js_saved_card: '#checkout-saved-card-0',
                order_confirmation: '.woocommerce-notice',
                three_d_password: '#txtPassword',
                three_d_submit: '#txtButton',
                success_order_number: '.woocommerce-order-overview__order',
                order_status: '#select2-order_status-container'
            },
            js: {
                iframe: 'iframe:last-of-type',
                widget: '#cko-widget',
                card_number: "input[data-checkout='card-number']",
                month: "input[data-checkout='expiry-month']",
                year: "input[data-checkout='expiry-year']",
                cvv: "input[data-checkout='cvv']",
                submit: '.form-submit',
                header: '.header',
                title: 'span.title:nth-child(1)',
                logo: 'div.logo:nth-child(2) > img:nth-child(1)'
            },
            hosted: {
                card_number: 'div.input-group:nth-child(2) > input:nth-child(2)',
                month: 'div.split-view:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
                year: 'div.split-view:nth-child(2) > div:nth-child(2) > input:nth-child(1)',
                cvv:
                    'div.split-view:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)',
                title: '',
                pay_button: '.form-submit',
                hosted_header: '#modal-wrapper > div.cko-md-content > div > div.header',
                hosted_pay_button:
                    '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content.card > form > input',
                hosted_alt_payments_tab:
                    '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.lp.fragment-2.enter',
                hosted_card_tab:
                    '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.tabs.split-view > div.tab.active.card',
                hosted_region_selector:
                    '#modal-wrapper > div.cko-md-content > div > div.container-body > div.content-control.region-selector'
            },
            pci: {
                name: '#woocommerce_checkout_pci-card-holder-name',
                card_number: '#woocommerce_checkout_pci-card-number',
                month_year: '#woocommerce_checkout_pci-card-expiry',
                cvv: '#woocommerce_checkout_pci-card-cvc'
            }
        },
        backend: {
            admin_username: '#user_login',
            admin_password: '#user_pass',
            admin_sign_in: '#wp-submit',
            dashboard: '#menu-dashboard',
            woo_plugin_state:
                '[data-slug="woocommerce"] > .plugin-title > .row-actions > :nth-child(1) > a',
            woo_deactivate:
                '[data-slug="woocommerce"] > .plugin-title > .row-actions > :nth-child(2) > a',
            woo_adress: '#store_address',
            woo_next: '.button-primary',
            woo_postcode: '#store_postcode',
            wo_pay: '.checked > div:nth-child(3) > span:nth-child(1)',
            woo_shipping_1:
                'li.wc-wizard-service-item:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
            woo_shipping_2:
                'li.wc-wizard-service-item:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)',
            woo_theme:
                'ul.wc-wizard-services:nth-child(1) > li:nth-child(1) > div:nth-child(2) > span:nth-child(1)',
            woo_skip: '.wc-return-to-dashboard',
            woo_create_product: 'a.button-primary',
            woo_product_name: '#title',
            woo_normal_price: '#_regular_price',
            woo_promo_price: '#_sale_price',
            woo_publish: '#publish',
            woo_city: '#store_city',
            plugin: {
                save: 'input.button-primary',
                non_pci: {
                    enable_plugin: '#woocommerce_woocommerce_checkout_non_pci_enabled',
                    settings_non_pci:
                        'tr.active:nth-child(2) > td:nth-child(2) > div:nth-child(2) > span:nth-child(1) > a:nth-child(1)',
                    activate_non_pci:
                        'tr.inactive:nth-child(3) > td:nth-child(2) > div:nth-child(2) > span:nth-child(1) > a:nth-child(1)',
                    secret_key: '#woocommerce_woocommerce_checkout_non_pci_secret_key',
                    private_shared_key:
                        '#woocommerce_woocommerce_checkout_non_pci_private_shared_key',
                    public_key: '#woocommerce_woocommerce_checkout_non_pci_public_key',
                    title: '#woocommerce_woocommerce_checkout_non_pci_title',
                    cancel_status_on_void: '#woocommerce_woocommerce_checkout_non_pci_void_status',
                    payment_action:
                        '#select2-woocommerce_woocommerce_checkout_non_pci_payment_action-container',
                    payment_action_selector:
                        '#woocommerce_woocommerce_checkout_non_pci_payment_action',
                    autocapture_time: '#woocommerce_woocommerce_checkout_non_pci_auto_cap_time',
                    new_order_status:
                        '#select2-woocommerce_woocommerce_checkout_non_pci_order_status-container',
                    new_order_status_selector:
                        '#woocommerce_woocommerce_checkout_non_pci_order_status',
                    three_d: '#select2-woocommerce_woocommerce_checkout_non_pci_is_3d-container',
                    three_d_selector: '#woocommerce_woocommerce_checkout_non_pci_is_3d',
                    integration:
                        '#select2-woocommerce_woocommerce_checkout_non_pci_integration_type-container',
                    integration_selector:
                        '#woocommerce_woocommerce_checkout_non_pci_integration_type',
                    save_cards: '#woocommerce_woocommerce_checkout_non_pci_saved_cards',
                    lightbox_url: '#woocommerce_woocommerce_checkout_non_pci_logo_url',
                    theme: '#woocommerce_woocommerce_checkout_non_pci_theme_color',
                    currency_code: '#woocommerce_woocommerce_checkout_non_pci_use_currency_code',
                    js_title: '#woocommerce_woocommerce_checkout_non_pci_form_title',
                    widget_color: '#woocommerce_woocommerce_checkout_non_pci_widget_color',
                    form_button_color:
                        '#woocommerce_woocommerce_checkout_non_pci_form_button_color',
                    form_label_color:
                        '#woocommerce_woocommerce_checkout_non_pci_form_button_color_label',
                    overlay_shade:
                        '#select2-woocommerce_woocommerce_checkout_non_pci_overlay_shade-container',
                    overlay_shade_selector:
                        '#woocommerce_woocommerce_checkout_non_pci_overlay_shade',
                    opacity: '#woocommerce_woocommerce_checkout_non_pci_overlay_opacity',
                    show_mobile_icons:
                        '#woocommerce_woocommerce_checkout_non_pci_show_mobile_icons',
                    payment_mode:
                        '#select2-woocommerce_woocommerce_checkout_non_pci_payment_mode-container',
                    js_theme:
                        '#select2-woocommerce_woocommerce_checkout_non_pci_frames_theme-container'
                },
                pci: {
                    enable_plugin: '#woocommerce_woocommerce_checkout_pci_enabled',
                    activate_pci:
                        'tr.inactive:nth-child(4) > td:nth-child(2) > div:nth-child(2) > span:nth-child(1) > a:nth-child(1)',
                    settings_pci:
                        'tr.active:nth-child(4) > td:nth-child(2) > div:nth-child(2) > span:nth-child(1) > a:nth-child(1)',
                    secret_key: '#woocommerce_woocommerce_checkout_pci_secret_key',
                    private_shared_key: '#woocommerce_woocommerce_checkout_pci_public_key',
                    cancel_status_on_void: '#woocommerce_woocommerce_checkout_pci_void_status',
                    payment_action:
                        '#select2-woocommerce_woocommerce_checkout_pci_payment_action-container',
                    payment_action_selector: '#woocommerce_woocommerce_checkout_pci_payment_action',
                    payment_action_authorize:
                        '#select2-woocommerce_woocommerce_checkout_pci_payment_action-result-qic8-authorize',
                    payment_action_autocapture:
                        '#select2-woocommerce_woocommerce_checkout_pci_payment_action-result-vjaz-authorize_capture',
                    autocapture_time: '#woocommerce_woocommerce_checkout_pci_auto_cap_time',
                    new_order_status:
                        '#select2-woocommerce_woocommerce_checkout_pci_order_status-container',
                    new_order_status_selector: '#woocommerce_woocommerce_checkout_pci_order_status',
                    three_d: '#select2-woocommerce_woocommerce_checkout_pci_is_3d-container',
                    three_d_selector: '#woocommerce_woocommerce_checkout_pci_is_3d',
                    save_cards: '#woocommerce_woocommerce_checkout_pci_saved_cards'
                }
            }
        }
    }
};
