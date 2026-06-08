export default {
  template: `
    <div class="navbar">
      <div class="nav-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab"
          @click="selectTab(tab)"
          :class="{ active: currentTab === tab }"
        >
          {{ tab }}
        </button>
      </div>
      <input 
        type="text" 
        v-model="searchInput" 
        placeholder="Search..."
        @input="updateInput"
        class="search-input"
      />
    </div>
  `,
  data() {
    return {
      tabs: ['Drop Tables', 'Item Sources', 'Item Data'],
      currentTab: 'Drop Tables',
      searchInput: ''
    }
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab;
      this.$emit('update-pick', tab);
    },
    updateInput() {
      this.$emit('update-input', this.searchInput);
    }
  }
}
