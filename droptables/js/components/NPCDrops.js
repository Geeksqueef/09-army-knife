export default {
  template: `
    <div class="npc-drops">
      <div v-for="result in processedResults" :key="result.name" class="npc-entry">
        <h2 class="npc-name">
          <a href="#" @click.prevent="openNpcViewer(result.ids, result.name)" class="npc-name-link">{{ result.name }}</a>
        </h2>
        <div class="npc-ids">IDs: {{ result.ids }}</div>
        
        <div v-if="result.defaultDrops.length > 0" class="drop-section">
          <h3>Default Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th @click="sortSection('default', 'name')">Name</th>
                <th @click="sortSection('default', 'sortValue')">Amount</th>
                <th>Rarity</th>
              </tr>
              <tr v-for="item in result.defaultDrops" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>
                  <a v-if="getDropTableLink(item.name)" :href="getDropTableLink(item.name)" target="_blank">{{ item.name }}</a>
                  <span v-else>{{ item.name }}</span>
                </td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td class="always">Always</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="result.mainDrops.length > 0" class="drop-section">
          <h3>Main Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th @click="sortSection('main', 'name')">Name</th>
                <th @click="sortSection('main', 'sortValue')">Amount</th>
                <th @click="sortSection('main', 'weight')">Rarity</th>
              </tr>
              <tr v-for="item in result.mainDrops" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>
                  <a v-if="getDropTableLink(item.name)" :href="getDropTableLink(item.name)" target="_blank" class="npc-link">{{ item.name }}</a>
                  <span v-else>{{ item.name }}</span>
                </td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td :class="rarityClass(item)" :title="item.percent + '%'">{{ item.rarity }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="result.tertiaryDrops.length > 0" class="drop-section">
          <h3>Tertiary Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th @click="sortSection('tertiary', 'name')">Name</th>
                <th @click="sortSection('tertiary', 'sortValue')">Amount</th>
                <th @click="sortSection('tertiary', 'weight')">Rarity</th>
              </tr>
              <tr v-for="item in result.tertiaryDrops" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>
                  <a v-if="getDropTableLink(item.name)" :href="getDropTableLink(item.name)" target="_blank" class="npc-link">{{ item.name }}</a>
                  <span v-else>{{ item.name }}</span>
                </td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td :class="rarityClass(item)" :title="item.percent + '%'">{{ item.rarity }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="result.charmDrops.length > 0" class="drop-section">
          <h3>Charm Drops</h3>
          <table class="drop-table">
            <tbody>
              <tr class="header-row">
                <th></th>
                <th @click="sortSection('charms', 'name')">Name</th>
                <th @click="sortSection('charms', 'sortValue')">Amount</th>
                <th @click="sortSection('charms', 'weight')">Rarity</th>
              </tr>
              <tr v-for="item in result.charmDrops" :key="item.id">
                <td><img :src="iconURL(item.id)" :alt="item.name" /></td>
                <td>
                  <a v-if="getDropTableLink(item.name)" :href="getDropTableLink(item.name)" target="_blank" class="npc-link">{{ item.name }}</a>
                  <span v-else>{{ item.name }}</span>
                </td>
                <td>
                  <div>{{ item.amountDisplay }}</div>
                  <div class="debug-hide">{{ item.perKillAverage }}</div>
                </td>
                <td :class="rarityClass(item)" :title="item.percent + '%'">{{ item.rarity }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  props: {
    searchResults: {
      type: Array,
      default: () => []
    },
    sortItems: {
      type: Function,
      required: true
    },
    iconURL: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      sortStates: {}
    }
  },
  computed: {
    processedResults() {
      return this.searchResults.map(result => ({
        ...result,
        defaultDrops: this.getSortedFiltered(result.items, i => i.weight === -1, 'default'),
        mainDrops: this.getSortedFiltered(result.items, i => i.weight !== -1, 'main'),
        tertiaryDrops: this.getSortedArray(result.tertiary, 'tertiary'),
        charmDrops: this.getSortedArray(result.charms, 'charms')
      }));
    }
  },
  methods: {
    getSortedFiltered(items, filterFn, sectionKey) {
      const filtered = items.filter(filterFn);
      const sortKey = this.sortStates[`${sectionKey}Key`];
      const sortDirection = this.sortStates[`${sectionKey}Direction`] || 'asc';
      
      if (!sortKey) return filtered;
      
      return [...filtered].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (typeof aVal === 'string') {
          return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      });
    },
    getSortedArray(items, sectionKey) {
      const sortKey = this.sortStates[`${sectionKey}Key`];
      const sortDirection = this.sortStates[`${sectionKey}Direction`] || 'asc';
      
      if (!sortKey) return items;
      
      return [...items].sort((a, b) => {
        const aVal = a[sortKey];
        const bVal = b[sortKey];
        if (typeof aVal === 'string') {
          return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        }
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      });
    },
    rarityClass(item) {
      const percent = parseFloat(item.percent);
      if (percent > 99.99) return 'always';
      if (percent > 4) return 'common';
      if (percent > 1) return 'uncommon';
      if (percent > 0.1) return 'rare';
      return 'veryrare';
    },
    sortSection(sectionKey, key) {
      this.sortStates[`${sectionKey}Key`] = key;
      this.sortStates[`${sectionKey}Direction`] = this.sortStates[`${sectionKey}Direction`] === 'asc' ? 'desc' : 'asc';
    },
    getDropTableLink(itemName) {
      const dropTableMapping = {
        'RDT': 'rdt.html',
        'RDT Slot': 'rdt.html',
        'Rare Drop Table': 'rdt.html',
        'GDT': 'GDT.html',
        'GDT Slot': 'GDT.html',
        'Gem Drop Table': 'GDT.html',
        'USDT': 'USDT.html',
        'USDT Slot': 'USDT.html',
        'Uncommon Seed Drop Table': 'USDT.html',
        'HDT': 'HDT.html',
        'HDT Slot': 'HDT.html',
        'Herb Drop Table': 'HDT.html',
        'C. Ele Minor Drop Table': 'CELEDT.html',
        'Chaos Elemental Minor Drop Table': 'CELEDT.html',
        'Rare Seed Drop Table': 'RSDT.html',
        'Allotment Seed Drop Table': 'ASDT.html'
      };
      return dropTableMapping[itemName] || null;
    },
    openNpcViewer(npcIds, npcName) {
      // Get the first NPC ID from the comma-separated list
      const npcId = npcIds.split(',')[0];
      
      // Send message to parent window to close droptables and open NPC viewer
      if (window.parent) {
        window.parent.postMessage({
          type: 'openNpcViewer',
          npcId: npcId,
          npcName: npcName
        }, '*');
      }
    }
  }
}
