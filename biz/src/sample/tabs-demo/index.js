/**
 * Created by wanglei on 16/9/1.
 */
import Vue from 'vue';

import TTabs from 'taurus/components/tabs/tabs';
import TFlatTabs from 'taurus/components/tabs/flat-tabs';

new Vue({
  name: 'TabsDemo',

  el: 'body',

  components: {
    TTabs,
    TFlatTabs
  },

  data () {
    return {
      tabs: ['Panel 1', 'Panel 2', 'Panel 3'],
      content: [
        {
          type: 'Panel 1',
          id: 'panel_one'
        },
        {
          type: 'Panel 2',
          id: 'panel_two'
        },
        {
          type: 'Panel 3',
          id: 'panel_three'
        }
      ],
      smallTabs: ['Panel 1', 'Panel 2', 'Panel 3'],
      smallContent: [
        {
          type: 'Panel 1',
          id: 's_panel_one'
        },
        {
          type: 'Panel 2',
          id: 's_panel_two'
        },
        {
          type: 'Panel 3',
          id: 's_panel_three'
        }
      ],
      flatTabs: ['LongPanel 1', 'LongPanel 2', 'LongPanel 3', 'LongPanel 4', 'LongPanel 5'],
      flatContent: [
        {
          type: 'LongPanel 1',
          id: 'flat_panel_one'
        },
        {
          type: 'LongPanel 2',
          id: 'flat_panel_two'
        },
        {
          type: 'LongPanel 3',
          id: 'flat_panel_three'
        },
        {
          type: 'LongPanel 4',
          id: 'flat_panel_four'
        },
        {
          type: 'LongPanel 5',
          id: 'flat_panel_five'
        }
      ],
      fewFlatTabs: ['Panel 1', 'Panel 2', 'PanelWithLongName'],
      fewFlatContent: [
        {
          type: 'Panel 1',
          id: 'f_flat_panel_one'
        },
        {
          type: 'Panel 2',
          id: 'f_flat_panel_two'
        },
        {
          type: 'PanelWithLongName',
          id: 'f_flat_panel_three'
        }
      ]
    };
  }
});
