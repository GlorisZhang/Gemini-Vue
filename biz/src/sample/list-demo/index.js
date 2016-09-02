import Vue from 'vue';
import VueResource from 'vue-resource';
import TBoxGroup from 'taurus/components/box-group/box-group';
import TSelectDropdown from 'taurus/components/dropdown/select-dropdown';

Vue.use(VueResource);

Vue.filter('checkboxFilter', function (value, flag) {
  var labelStr = '';
  var keyName = '';
  switch (flag) {
    case 1:
      keyName = 'filterValue';  // 搜集labels
      break;
    case 2:
      keyName = 'prodModelCount';  // 搜集counts
      break;
    case 3:
      keyName = 'selected';  // 搜集checked
      break;
    default:
      break;
  }
  for (let i = 0; i < value.length; i++) {
    if (flag === '3') {
      (value[i][keyName] === 'true' || value[i][keyName] === true) ? value[i][keyName] = 1 : value[i][keyName] = 0;
    }
    labelStr += value[i][keyName];
    i < value.length - 1 ? labelStr += ',' : null;
  }
  return labelStr;
});

Vue.filter('fixed', function (value, num) {
  num = num || 0;
  return (value / 10000).toFixed(num);
});

Vue.filter('attrColor', function (value) {
  var color = '';
  switch (value) {
    case 'Silver':
      color = '#DADADA';
      break;
    case 'Gold':
      color = '#E9C261';
      break;
    case 'Grey':
      color = '#747474';
      break;
    case 'Rose Gold':
      color = '#e0b6b0';
      break;
    case 'Black':
      color = '#000000';
      break;
    case 'White':
      color = '#ffffff';
      break;
    case 'Green':
      color = '#B2F58D';
      break;
    case 'Blue':
      color = '#7AC2FE';
      break;
    case 'Lime Guld':
      color = '#ced094';
      break;
    default:
      color = '#ffffff';
      break;
  };
  return color;
});

new Vue({
  el: '#container--main--list',
  data: function () {
    return {
      'filters': [],
      'models': [],
      'recommends': [],
      'totalCount': 0
    };
  },
  components: {
    TBoxGroup,
    TSelectDropdown
  },
  created: function () {
    // this.queryProductList();
    this.filters = [
      {
        'filterCode': '990200000003',
        'filterName': 'Brand',
        'filterValueList': [
          {
            'filterValue': 'Apple',
            'filterValueId': '1220738',
            'filterValueName': 'Display:Apple',
            'prodModelCount': '4',
            'selected': 'false'
          },
          {
            'filterValue': 'Samsung',
            'filterValueId': '1220739',
            'filterValueName': 'Display:Samsung',
            'prodModelCount': '1',
            'selected': 'false'
          }
        ]
      }
    ];
    this.models = [
      {
        'defaultProdOfferingId': '1423136',
        'groupAttr': [
          {
            'attrCode': '990200000001',
            'attrName': 'Color',
            'values': [
              {
                'attrValue': 'Silver',
                'attrValueName': 'Silver'
              },
              {
                'attrValue': 'Grey',
                'attrValueName': 'Grey'
              }
            ]
          },
          {
            'attrCode': '990200000004',
            'attrName': 'Memory',
            'values': [
              {
                'attrValue': '128 GB',
                'attrValueName': 'Display:128 GB'
              },
              {
                'attrValue': '16 GB',
                'attrValueName': 'Display:16 GB'
              },
              {
                'attrValue': '64 GB',
                'attrValueName': 'Display:64 GB'
              }
            ]
          }
        ],
        'offer': [
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Silver',
                    'attrValueName': 'Silver'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '16 GB',
                    'attrValueName': 'Display:16 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'Iphone 6',
                    'attrValueName': 'Display:Iphone 6'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423142',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005423',
                  'priceCode': '5101953',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1006',
                  'pricePlanId': '5101953',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005423',
                  'priceCode': '5100104',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083399',
                  'pricePlanId': '5100104',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-4833000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-17900000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005423',
                  'priceCode': '5101953',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083393',
                  'pricePlanId': '5101953',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12446136',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '46096840'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6_16GB_silver',
            'inventory': [
              {
                'prodOfferId': '1423136',
                'quantity': '10',
                'resourceCode': '1113469',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'true',
            'longName': '',
            'medias': [
              {
                'mediaId': '2348',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005423',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005423',
                'priceCode': '5101953',
                'priceId': '3083393',
                'pricePlanId': '5101953',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126387',
            'prodOfferingId': '1423136',
            'prodOfferingName': 'Apple iPhone 6 16GB, silver',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '9',
            'type': 'GSM_TER'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Grey',
                    'attrValueName': 'Grey'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '16 GB',
                    'attrValueName': 'Display:16 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'Iphone 6',
                    'attrValueName': 'Display:Iphone 6'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423220',
              'defaultTag': 'true',
              'otcPrice': 44400000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005439',
                  'priceCode': '5101951',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1009',
                  'pricePlanId': '5101951',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005439',
                  'priceCode': '5100080',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083477',
                  'pricePlanId': '5100080',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-4833000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-17900000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005439',
                  'priceCode': '5101951',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083471',
                  'pricePlanId': '5101951',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12446136',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '46096840'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6_16GB_space_gray',
            'inventory': [
              {
                'prodOfferId': '1423214',
                'quantity': '10',
                'resourceCode': '1113468',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '2337',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005439',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005439',
                'priceCode': '5101951',
                'priceId': '3083471',
                'pricePlanId': '5101951',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126387',
            'prodOfferingId': '1423214',
            'prodOfferingName': 'Apple iPhone 6 16GB, space gray',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '10',
            'type': 'GSM_TER'
          }
        ],
        'pop': [],
        'prodModelId': '1126387',
        'prodModelName': 'Apple Iphone 6',
        'sellingPoint': [],
        'splash': [],
        'stat': []
      },
      {
        'defaultProdOfferingId': '1423188',
        'groupAttr': [
          {
            'attrCode': '990200000001',
            'attrName': 'Color',
            'values': [
              {
                'attrValue': 'Silver',
                'attrValueName': 'Silver'
              }
            ]
          },
          {
            'attrCode': '990200000004',
            'attrName': 'Memory',
            'values': [
              {
                'attrValue': '16 GB',
                'attrValueName': 'Display:16 GB'
              }
            ]
          }
        ],
        'offer': [
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Silver',
                    'attrValueName': 'Silver'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '16 GB',
                    'attrValueName': 'Display:16 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'iPhone 5s',
                    'attrValueName': 'iPhone 5s'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423204',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005437',
                  'priceCode': '5101949',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1008',
                  'pricePlanId': '5101949',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005437',
                  'priceCode': '5100066',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083461',
                  'pricePlanId': '5100066',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-135000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-500000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005437',
                  'priceCode': '5101949',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083445',
                  'pricePlanId': '5101949',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '7998803',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '29625197'
                }
              ],
              'subscriptionProdOfferingId': '1423587'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_5s_16GB_silver',
            'inventory': [
              {
                'prodOfferId': '1423188',
                'quantity': '10',
                'resourceCode': '1113460',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'true',
            'longName': '',
            'medias': [
              {
                'mediaId': '1345',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005437',
            'pageReference': '',
            'payType': '1',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005437',
                'priceCode': '5101949',
                'priceId': '3083445',
                'pricePlanId': '5101949',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126517',
            'prodOfferingId': '1423188',
            'prodOfferingName': 'Apple iPhone 5s 16GB, silver',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '19',
            'type': 'GSM_TER'
          }
        ],
        'pop': [],
        'prodModelId': '1126517',
        'prodModelName': 'Apple iPhone 5s',
        'sellingPoint': [],
        'splash': [],
        'stat': []
      },
      {
        'defaultProdOfferingId': '1423344',
        'groupAttr': [
          {
            'attrCode': '990200000001',
            'attrName': 'Color',
            'values': [
              {
                'attrValue': 'Silver',
                'attrValueName': 'Silver'
              }
            ]
          },
          {
            'attrCode': '990200000004',
            'attrName': 'Memory',
            'values': [
              {
                'attrValue': '64 GB',
                'attrValueName': 'Display:64 GB'
              }
            ]
          }
        ],
        'offer': [
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Silver',
                    'attrValueName': 'Silver'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Samsung',
                    'attrValueName': 'Display:Samsung'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'Galaxy S6',
                    'attrValueName': 'Galaxy S6'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '64 GB',
                    'attrValueName': 'Display:64 GB'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423350',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005473',
                  'priceCode': '5101977',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1013',
                  'pricePlanId': '5101977',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005473',
                  'priceCode': '5100392',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083607',
                  'pricePlanId': '5100392',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-5078700',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-18810000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005473',
                  'priceCode': '5101977',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083601',
                  'pricePlanId': '5101977',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12200436',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '45186840'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Samsung_Galaxy S6_64GB_silver',
            'inventory': [
              {
                'prodOfferId': '1423344',
                'quantity': '10',
                'resourceCode': '1114765',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'true',
            'longName': '',
            'medias': [
              {
                'mediaId': '1345',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005473',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005473',
                'priceCode': '5101977',
                'priceId': '3083601',
                'pricePlanId': '5101977',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126478',
            'prodOfferingId': '1423344',
            'prodOfferingName': 'Samsung Galaxy S6 64GB silver',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '13',
            'type': 'GSM_TER'
          }
        ],
        'pop': [],
        'prodModelId': '1126478',
        'prodModelName': 'Samsung Galaxy S6',
        'sellingPoint': [],
        'splash': [],
        'stat': []
      },
      {
        'defaultProdOfferingId': '1423084',
        'groupAttr': [
          {
            'attrCode': '990200000001',
            'attrName': 'Color',
            'values': [
              {
                'attrValue': 'Grey',
                'attrValueName': 'Grey'
              },
              {
                'attrValue': 'Gold',
                'attrValueName': 'Gold'
              },
              {
                'attrValue': 'Silver',
                'attrValueName': 'Silver'
              }
            ]
          },
          {
            'attrCode': '990200000004',
            'attrName': 'Memory',
            'values': [
              {
                'attrValue': '16 GB',
                'attrValueName': 'Display:16 GB'
              },
              {
                'attrValue': '64 GB',
                'attrValueName': 'Display:64 GB'
              },
              {
                'attrValue': '128 GB',
                'attrValueName': 'Display:128 GB'
              }
            ]
          }
        ],
        'offer': [
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Silver',
                    'attrValueName': 'Silver'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '16 GB',
                    'attrValueName': 'Display:16 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'Iphone 6 Plus',
                    'attrValueName': 'Display:Iphone 6 Plus'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423090',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005409',
                  'priceCode': '5101963',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1004',
                  'pricePlanId': '5101963',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005409',
                  'priceCode': '5100224',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083347',
                  'pricePlanId': '5100224',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-4592700',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-17010000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005409',
                  'priceCode': '5101963',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083341',
                  'pricePlanId': '5101963',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12686436',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '46986840'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6_Plus_16GB_silver',
            'inventory': [
              {
                'prodOfferId': '1423084',
                'quantity': '15',
                'resourceCode': '1113478',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'true',
            'longName': '',
            'medias': [
              {
                'mediaId': '2345',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005409',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005409',
                'priceCode': '5101963',
                'priceId': '3083341',
                'pricePlanId': '5101963',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126368',
            'prodOfferingId': '1423084',
            'prodOfferingName': 'Apple iPhone 6 Plus 16GB, silver',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '7',
            'type': 'GSM_TER'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Grey',
                    'attrValueName': 'Grey'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '64 GB',
                    'attrValueName': 'Display:64 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'Iphone 6 Plus',
                    'attrValueName': 'Display:Iphone 6 Plus'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423116',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005411',
                  'priceCode': '5101965',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1005',
                  'pricePlanId': '5101965',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005411',
                  'priceCode': '5100248',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083373',
                  'pricePlanId': '5100248',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-5240700',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-19410000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005411',
                  'priceCode': '5101965',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083367',
                  'pricePlanId': '5101965',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12038436',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '44586840'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6_Plus_64GB_space_gray',
            'inventory': [
              {
                'prodOfferId': '1423110',
                'quantity': '15',
                'resourceCode': '1113480',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '2335',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005411',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005411',
                'priceCode': '5101965',
                'priceId': '3083367',
                'pricePlanId': '5101965',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126368',
            'prodOfferingId': '1423110',
            'prodOfferingName': 'Apple iPhone 6 Plus 64GB, space gray',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '8',
            'type': 'GSM_TER'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Grey',
                    'attrValueName': 'Grey'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '16 GB',
                    'attrValueName': 'Display:16 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'Iphone 6 Plus',
                    'attrValueName': 'Display:Iphone 6 Plus'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'Apple iPhone 6 Plus Gold 128 GB_Retail',
            'effectiveDate': '20160114T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6_Plus_Grey_16_GB',
            'inventory': [
              {
                'prodOfferId': '1422853',
                'quantity': '10',
                'resourceCode': '1102527',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '2335',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '80004950',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '10060',
                'name': 'devicePrice',
                'offerId': '80004950',
                'priceCode': '7001421',
                'priceId': '3083089',
                'pricePlanId': '80004949',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '116717',
                'taxFlag': '2',
                'timeOfCharge': '0',
                'type': '1',
                'value': '549000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '116717',
                'taxFlag': '1',
                'type': '3',
                'value': '432283'
              }
            ],
            'prodModelId': '1126368',
            'prodOfferingId': '1422853',
            'prodOfferingName': 'Apple iPhone 6 Plus Grey 16 GB',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '12',
            'type': 'RES_VAS'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Grey',
                    'attrValueName': 'Grey'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '64 GB',
                    'attrValueName': 'Display:64 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'Iphone 6 Plus',
                    'attrValueName': 'Display:Iphone 6 Plus'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'Apple iPhone 6 Plus Gold 128 GB_Retail',
            'effectiveDate': '20160114T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6_Plus_Grey_64_GB',
            'inventory': [],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '2335',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '80004952',
            'pageReference': '',
            'payType': '1',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '10060',
                'name': 'devicePrice',
                'offerId': '80004952',
                'priceCode': '7001422',
                'priceId': '3083090',
                'pricePlanId': '80004951',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '7476300',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '27690000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '7476300',
                'taxFlag': '1',
                'type': '3',
                'value': '27690000'
              }
            ],
            'prodModelId': '1126368',
            'prodOfferingId': '1422854',
            'prodOfferingName': 'Apple iPhone 6 Plus Grey 64 GB',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '2',
            'type': 'RES_VAS'
          }
        ],
        'pop': [],
        'prodModelId': '1126368',
        'prodModelName': 'Apple Iphone 6 Plus',
        'sellingPoint': [],
        'splash': [],
        'stat': []
      },
      {
        'defaultProdOfferingId': '1422953',
        'groupAttr': [
          {
            'attrCode': '990200000001',
            'attrName': 'Color',
            'values': [
              {
                'attrValue': 'Black',
                'attrValueName': 'Black'
              },
              {
                'attrValue': 'White',
                'attrValueName': 'White'
              }
            ]
          },
          {
            'attrCode': '990200000004',
            'attrName': 'Memory',
            'values': [
              {
                'attrValue': '128 GB',
                'attrValueName': 'Display:128 GB'
              },
              {
                'attrValue': '16 GB',
                'attrValueName': 'Display:16 GB'
              },
              {
                'attrValue': '64 GB',
                'attrValueName': 'Display:64 GB'
              }
            ]
          }
        ],
        'offer': [
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Black',
                    'attrValueName': 'Black'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Sony',
                    'attrValueName': 'Display:Sony'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '128 GB',
                    'attrValueName': 'Display:128 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'XperiaTM M4 Aqua',
                    'attrValueName': 'Display:XperiaTM M4 Aqua'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': '',
            'deviceDefaultContract': {
              'contractId': '1422954',
              'defaultTag': 'true',
              'otcPrice': 12001500,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '10060',
                  'name': 'discount',
                  'offerId': '80005143',
                  'priceCode': '7001841',
                  'priceDetailType': 'PRICE_PLAN_BUSI_NORMAL',
                  'priceId': '3083164',
                  'pricePlanId': '80005240',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '2551500',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '9450000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '0',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '0'
                }
              ],
              'subscriptionProdOfferingId': '1422921'
            },
            'effectiveDate': '20160125T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Sony_XperiaTM_M4_Aqua_Black_128_GB',
            'inventory': [],
            'isDefault': 'true',
            'longName': '',
            'medias': [
              {
                'mediaId': '1335',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '80005143',
            'pageReference': '',
            'payType': '2',
            'prices': [],
            'prodModelId': '1126452',
            'prodOfferingId': '1422953',
            'prodOfferingName': 'Sony XperiaTM M4 Aqua Black 128 GB',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '',
            'type': 'GSM_TER'
          }
        ],
        'pop': [],
        'prodModelId': '1126452',
        'prodModelName': 'Sony XperiaTM M4 Aqua',
        'sellingPoint': [],
        'splash': [],
        'stat': []
      },
      {
        'defaultProdOfferingId': '1432232',
        'groupAttr': [
          {
            'attrCode': '990200000004',
            'attrName': 'Memory',
            'values': [
              {
                'attrValue': '8',
                'attrValueName': 'Display:8'
              }
            ]
          },
          {
            'attrCode': '990200000001',
            'attrName': 'Color',
            'values': [
              {
                'attrValue': 'feh¨¦r',
                'attrValueName': 'Display:feh¨¦r'
              }
            ]
          }
        ],
        'offer': [
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '8',
                    'attrValueName': 'Display:8'
                  }
                ]
              },
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'feh¨¦r',
                    'attrValueName': 'Display:feh¨¦r'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'LG',
                    'attrValueName': 'Display:LG'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'G Pad 8.0',
                    'attrValueName': 'Display:G Pad 8.0'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'LG G Pad 8.0 LTE',
            'deviceDefaultContract': {
              'contractId': '1432233',
              'defaultTag': 'true',
              'instalmentPrice': 408254,
              'instalments': [
                {
                  'amount': '4899000',
                  'chargeType': '0',
                  'cycleAmount': '748466',
                  'cycleCount': '6',
                  'firstPayment': '408200',
                  'handlingCharge': '0',
                  'id': '1432234',
                  'prices': [
                    {
                      'discount': '0',
                      'itemCode': '310000004',
                      'name': 'installmentDownPayment',
                      'offerId': '',
                      'priceCode': '5402362',
                      'priceId': '3152013',
                      'pricePlanId': '5525426',
                      'prodType': '2001',
                      'putInvoice': '0',
                      'tax': '86783',
                      'taxFlag': '2',
                      'timeOfCharge': '0',
                      'type': '1',
                      'value': '408200'
                    },
                    {
                      'discount': '0',
                      'name': 'minPrice',
                      'tax': '1041520',
                      'taxFlag': '1',
                      'type': '3',
                      'value': '3857480'
                    }
                  ],
                  'roundingType': '2'
                },
                {
                  'amount': '4899000',
                  'chargeType': '0',
                  'cycleAmount': '408254',
                  'cycleCount': '11',
                  'firstPayment': '408200',
                  'handlingCharge': '0',
                  'id': '1432235',
                  'prices': [
                    {
                      'discount': '0',
                      'itemCode': '310000004',
                      'name': 'installmentDownPayment',
                      'offerId': '',
                      'priceCode': '5402362',
                      'priceId': '3152018',
                      'pricePlanId': '5525426',
                      'prodType': '2001',
                      'putInvoice': '0',
                      'tax': '86783',
                      'taxFlag': '2',
                      'timeOfCharge': '0',
                      'type': '1',
                      'value': '408200'
                    },
                    {
                      'discount': '0',
                      'name': 'minPrice',
                      'tax': '1041520',
                      'taxFlag': '1',
                      'type': '3',
                      'value': '3857480'
                    }
                  ],
                  'roundingType': '2'
                }
              ],
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '300000103',
                  'name': 'depositPrice',
                  'offerId': '8400084',
                  'priceCode': '5454843',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '3152010',
                  'pricePlanId': '5525426',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '490890',
                  'taxFlag': '2',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '2309000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '8400084',
                  'priceCode': '5433244',
                  'priceDetailType': 'PRICE_PLAN_BUSI_HANDSET_SUB',
                  'priceId': '3152011',
                  'pricePlanId': '5525426',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-255118',
                  'taxFlag': '2',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-1200000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '8400084',
                  'priceCode': '5402362',
                  'priceDetailType': 'PRICE_PLAN_BUSI_RES',
                  'priceId': '3152009',
                  'pricePlanId': '5494465',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '1296638',
                  'taxFlag': '2',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '6099000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '2669176',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '9885824'
                }
              ],
              'subscriptionProdOfferingId': '1423532',
              'subscriptionProdOfferingName': 'MyTariff XS'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'LG-G-Pad-8.0-LTE',
            'inventory': [],
            'isDefault': 'true',
            'longName': 'LG G Pad 8.0 LTE -long',
            'medias': [
              {
                'mediaId': '1',
                'mediaUseType': '1001'
              },
              {
                'mediaId': '2',
                'mediaUseType': '1002'
              },
              {
                'mediaId': '3',
                'mediaUseType': '1003'
              }
            ],
            'offerCode': '8400084',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '8400084',
                'priceCode': '5402362',
                'priceId': '3152009',
                'pricePlanId': '5494465',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '1296638',
                'taxFlag': '2',
                'timeOfCharge': '0',
                'type': '1',
                'value': '6099000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '1296638',
                'taxFlag': '1',
                'type': '3',
                'value': '4802362'
              }
            ],
            'prodModelId': '1127438',
            'prodOfferingId': '1432232',
            'prodOfferingName': 'LG G Pad 8.0 LTE',
            'sellingPointDefineList': [
              {
                'content': 'LG G Pad 8.0 LTE'
              }
            ],
            'shortName': 'LG G Pad 8.0 LTE',
            'showOrder': '',
            'type': 'GSM_TER'
          }
        ],
        'pop': [],
        'prodModelId': '1127438',
        'prodModelName': 'LG G Pad 8.0',
        'sellingPoint': [],
        'splash': [],
        'stat': []
      },
      {
        'defaultProdOfferingId': '1423240',
        'groupAttr': [
          {
            'attrCode': '990200000001',
            'attrName': 'Color',
            'values': [
              {
                'attrValue': 'Grey',
                'attrValueName': 'Grey'
              },
              {
                'attrValue': 'Gold',
                'attrValueName': 'Gold'
              },
              {
                'attrValue': 'Rose Gold',
                'attrValueName': 'Rose Gold'
              }
            ]
          },
          {
            'attrCode': '990200000004',
            'attrName': 'Memory',
            'values': [
              {
                'attrValue': '128 GB',
                'attrValueName': 'Display:128 GB'
              },
              {
                'attrValue': '16 GB',
                'attrValueName': 'Display:16 GB'
              },
              {
                'attrValue': '64 GB',
                'attrValueName': 'Display:64 GB'
              }
            ]
          }
        ],
        'offer': [
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Grey',
                    'attrValueName': 'Grey'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '16 GB',
                    'attrValueName': 'Display:16 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'iPhone 6s',
                    'attrValueName': 'Display:iPhone 6s'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423246',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005463',
                  'priceCode': '5101967',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1001',
                  'pricePlanId': '5101967',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005463',
                  'priceCode': '5100272',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083503',
                  'pricePlanId': '5100272',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-4644000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-17200000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005463',
                  'priceCode': '5101967',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083497',
                  'pricePlanId': '5101967',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12635136',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '46796840'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6s_16GB_space_gray',
            'inventory': [
              {
                'prodOfferId': '1423240',
                'quantity': '10',
                'resourceCode': '1114753',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'true',
            'longName': '',
            'medias': [
              {
                'mediaId': '1335',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005463',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005463',
                'priceCode': '5101967',
                'priceId': '3083497',
                'pricePlanId': '5101967',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126437',
            'prodOfferingId': '1423240',
            'prodOfferingName': 'Apple iPhone 6s 16GB, space gray',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '11',
            'type': 'GSM_TER'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Grey',
                    'attrValueName': 'Grey'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '128 GB',
                    'attrValueName': 'Display:128 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'iPhone 6s',
                    'attrValueName': 'Display:iPhone 6s'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': '',
            'effectiveDate': '20160125T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6s_Grey_128_Gb',
            'inventory': [
              {
                'prodOfferId': '1422989',
                'quantity': '200',
                'resourceCode': '80004280',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '1343',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '80005051',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '10060',
                'name': 'devicePrice',
                'offerId': '80005051',
                'priceCode': '7001650',
                'priceId': '3083189',
                'pricePlanId': '80005049',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '135000',
                'taxFlag': '2',
                'timeOfCharge': '0',
                'type': '1',
                'value': '635000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '135000',
                'taxFlag': '1',
                'type': '3',
                'value': '500000'
              }
            ],
            'prodModelId': '1126437',
            'prodOfferingId': '1422989',
            'prodOfferingName': 'Apple iPhone 6s Grey 128 Gb',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '6',
            'type': 'GSM_TER'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Gold',
                    'attrValueName': 'Gold'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '16 GB',
                    'attrValueName': 'Display:16 GB'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'iPhone 6s',
                    'attrValueName': 'Display:iPhone 6s'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423308',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005467',
                  'priceCode': '5101971',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1011',
                  'pricePlanId': '5101971',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005467',
                  'priceCode': '5100330',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083565',
                  'pricePlanId': '5100330',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-351000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-1300000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005467',
                  'priceCode': '5101971',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083549',
                  'pricePlanId': '5101971',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '7782803',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '28825197'
                }
              ],
              'subscriptionProdOfferingId': '1423587'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6s_16GB_gold',
            'inventory': [
              {
                'prodOfferId': '1423292',
                'quantity': '0',
                'resourceCode': '1114761',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '1343',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005467',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005467',
                'priceCode': '5101971',
                'priceId': '3083549',
                'pricePlanId': '5101971',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126437',
            'prodOfferingId': '1423292',
            'prodOfferingName': 'Apple iPhone 6s 16GB, gold',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '3',
            'type': 'GSM_TER'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Rose Gold',
                    'attrValueName': 'Rose Gold'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'iPhone 6s',
                    'attrValueName': 'Display:iPhone 6s'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '64 GB',
                    'attrValueName': 'Display:64 GB'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423376',
              'defaultTag': 'true',
              'otcPrice': 38100000,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005475',
                  'priceCode': '5101979',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1014',
                  'pricePlanId': '5101979',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005475',
                  'priceCode': '5100416',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083633',
                  'pricePlanId': '5100416',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-5078700',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-18810000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005475',
                  'priceCode': '5101979',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083627',
                  'pricePlanId': '5101979',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000000'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12200436',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '45186840'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6s_64GB,_rose_gold',
            'inventory': [
              {
                'prodOfferId': '1423370',
                'quantity': '10',
                'resourceCode': '1114766',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '1343',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005475',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005475',
                'priceCode': '5101979',
                'priceId': '3083627',
                'pricePlanId': '5101979',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000000'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000000'
              }
            ],
            'prodModelId': '1126437',
            'prodOfferingId': '1423370',
            'prodOfferingName': 'Apple iPhone 6s 64GB, rose gold',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '14',
            'type': 'GSM_TER'
          },
          {
            'agentDescription': '',
            'attrGroupList': [
              {
                'attrCode': '990200000001',
                'attrName': 'Color',
                'values': [
                  {
                    'attrValue': 'Grey',
                    'attrValueName': 'Grey'
                  }
                ]
              },
              {
                'attrCode': '990200000003',
                'attrName': 'Brand',
                'values': [
                  {
                    'attrValue': 'Apple',
                    'attrValueName': 'Display:Apple'
                  }
                ]
              },
              {
                'attrCode': '990200000008',
                'attrName': 'Model',
                'values': [
                  {
                    'attrValue': 'iPhone 6s',
                    'attrValueName': 'Display:iPhone 6s'
                  }
                ]
              },
              {
                'attrCode': '990200000004',
                'attrName': 'Memory',
                'values': [
                  {
                    'attrValue': '64 GB',
                    'attrValueName': 'Display:64 GB'
                  }
                ]
              }
            ],
            'catalogId': '1110361',
            'categoryId': '1009572',
            'description': 'HS',
            'deviceDefaultContract': {
              'contractId': '1423566',
              'defaultTag': 'true',
              'otcPrice': 38100001,
              'prices': [
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'depositPrice',
                  'offerId': '20005471',
                  'priceCode': '5101975',
                  'priceDetailType': 'PRICE_PLAN_BUSI_DEPOSIT',
                  'priceId': '1017',
                  'pricePlanId': '5101955',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '270000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '12',
                  'value': '1000000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000005',
                  'name': 'discount',
                  'offerId': '20005471',
                  'priceCode': '5100368',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083831',
                  'pricePlanId': '5100368',
                  'prodType': '1003',
                  'putInvoice': '0',
                  'tax': '-5078700',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '-18810000'
                },
                {
                  'discount': '0',
                  'itemCode': '310000004',
                  'name': 'devicePrice',
                  'offerId': '20005471',
                  'priceCode': '5101975',
                  'priceDetailType': 'PRICE_PLAN_BUSI_CONTRACT',
                  'priceId': '3083825',
                  'pricePlanId': '5101975',
                  'prodType': '3001',
                  'putInvoice': '0',
                  'tax': '8100000',
                  'taxFlag': '1',
                  'timeOfCharge': '0',
                  'type': '1',
                  'value': '30000001'
                },
                {
                  'discount': '0',
                  'itemCode': '',
                  'name': 'minPrice',
                  'tax': '12200436',
                  'taxFlag': '1',
                  'type': '3',
                  'value': '45186841'
                }
              ],
              'subscriptionProdOfferingId': '1423559',
              'subscriptionProdOfferingName': 'MyTariff XXL'
            },
            'effectiveDate': '20150202T000000',
            'expireDate': '20371231T000000',
            'identifyCode': 'Apple_iPhone_6s_64GB_ space_gray',
            'inventory': [
              {
                'prodOfferId': '1423560',
                'quantity': '10',
                'resourceCode': '1114763',
                'storeCode': 'O9999'
              }
            ],
            'isDefault': 'false',
            'longName': '',
            'medias': [
              {
                'mediaId': '1335',
                'mediaUseType': '1001'
              }
            ],
            'offerCode': '20005471',
            'pageReference': '',
            'payType': '2',
            'prices': [
              {
                'discount': '0',
                'itemCode': '300000045',
                'name': 'deliverFee',
                'offerId': '0',
                'priceCode': '2624167',
                'priceDetailType': 'PRICE_PLAN_BUSI_DELIVER',
                'pricePlanId': '',
                'putInvoice': '1',
                'tax': '0',
                'taxFlag': '1',
                'timeOfCharge': '1',
                'type': '4',
                'value': '0'
              },
              {
                'discount': '0',
                'itemCode': '310000004',
                'name': 'devicePrice',
                'offerId': '20005471',
                'priceCode': '5101975',
                'priceId': '3083825',
                'pricePlanId': '5101975',
                'prodType': '3001',
                'putInvoice': '0',
                'tax': '8100000',
                'taxFlag': '1',
                'timeOfCharge': '0',
                'type': '1',
                'value': '30000001'
              },
              {
                'discount': '0',
                'name': 'minPrice',
                'tax': '8100000',
                'taxFlag': '1',
                'type': '3',
                'value': '30000001'
              }
            ],
            'prodModelId': '1126437',
            'prodOfferingId': '1423560',
            'prodOfferingName': 'Apple iPhone 6s 64GB, space gray',
            'sellingPointDefineList': [],
            'shortName': '',
            'showOrder': '17',
            'type': 'GSM_TER'
          }
        ],
        'pop': [],
        'prodModelId': '1126437',
        'prodModelName': 'Apple iPhone 6s',
        'sellingPoint': [],
        'splash': [],
        'stat': []
      }
    ];
    var json = [
      {
        'price': 548999,
        'prodOfferingId': '1423552',
        'text': 'MyTariff S'
      },
      {
        'price': 1798999,
        'prodOfferingId': '1423559',
        'text': 'MyTariff XXL'
      },
      {
        'price': 748999,
        'prodOfferingId': '1423555',
        'text': 'MyTariff M'
      },
      {
        'price': 319000,
        'prodOfferingId': '1423532',
        'text': 'MyTariff XS'
      },
      {
        'price': 1398999,
        'prodOfferingId': '1423557',
        'text': 'MyTariff L'
      }
    ];
    this.recommends = json;
    this.totalCount = 9;
  },
  methods: {
    queryProductList: function (prodOfferingId) {
      var url = 'http://10.11.19.108:8080/site/api/product/productList';
      Vue.http.get(url, {
        before (req) {
          console.log(req);
        }
      }).then((res) => {
        // 响应成功回调
        if (res.ok) {
          console.log(res.data);
          // TODO 设置filter数据
        }
      }).catch((res) => {
        // 异常调用
        console.log(res);
      });
    },
    detailInfo: function (prodModelId, prodOfferingId, event) {
      // TODO 跳转详情页
      alert('prodModelId = ' + prodModelId + '\nprodOfferingId = ' + prodOfferingId);
    },
    // 根据颜色切换对应offer
    changeOfferForColor: function (pIndex, oIndex, color, event) {
      console.log(pIndex);
      console.log(oIndex);
      var p = this.$data.models[pIndex];
      p.offer[oIndex].isDefault = 'false';
      for (let i = 0; i < p.offer.length; i++) {
        for (let j = 0; j < p.offer[i].attrGroupList.length; j++) {
          var att = p.offer[i].attrGroupList[j];
          if (att.attrName === 'Color' && att.values[0].attrValue === color) {
            p.offer[i].isDefault = 'true';
            break;
          }
        }
        if (p.offer[i].isDefault === 'true') {
          break;
        }
      }
    },
    filterChanged: function (index, newValue) {
      console.log(index);
      console.log(newValue);
    },
    planChange: function (newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
      // TODO 用newValue调服务刷新页面
      // this.queryProductList(newValue);
    }
  }
});
