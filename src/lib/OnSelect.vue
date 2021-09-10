<template>
  <div
    class="on-select gap-2 flex flex-col w-full relative"
    :disabled="disabled"
    :class="{ disabled }"
    @blur="closeConditional"
    :tabindex="tabindex"
  >
    <span v-if="label != ''" class="text-secondary-400 text-xs px-2 relative"
      >{{ label }}<small v-if="required">*</small>
    </span>
    <div
      class="selected h-9 w-full border-b solid border-gray-300 z-30 relative"
      :class="{ isActive: isOpen }"
      @click="toggleOpen"
    >
      <span v-if="currentSelection.length === 0" class="text-secondary-300">
        {{ placeholder }}
      </span>
      <span>
        {{ currentSelectionLabelSplit }}
      </span>
      <i
        class="
          text-gray-500 text-2xl
          mdi mdi-chevron-down
          absolute
          right-1
          z-10
          top-2
        "
      ></i>
    </div>
    <input id="select_default" type="hidden" :value="value" />
    <div
      v-if="isOpen"
      class="absolute container z-40"
      :class="label !== '' ? 'top-16' : 'top-12'"
    >
      <div class="pt-5 pb-3" @click.stop>
        <slot name="search">
          <div class="rounded-md w-full flex bg-gray-100 py-1 px-4 space-x-2">
            <input
              type="search"
              v-model="search"
              class="w-full bg-gray-100 text-secondary-500"
              @focus="toggleSearcFocus(true)"
              @blur="toggleSearcFocus(false)"
            />
            <i
              v-if="search == ''"
              class="mdi mdi-magnify text-primary-500 text-xl"
            ></i>
          </div>
        </slot>
      </div>
      <ul class="items px-1 cursor-pointer">
        <li v-if="!filteredItems.length">
          <slot name="no-item">
            {{ noItemsString }}
          </slot>
        </li>
        <li
          v-for="(item, i) of filteredItems"
          :key="i"
          class="flex justify-between"
          :class="
            (multiple ? 'multi-selection' : '',
            item.children && enableOptGroup
              ? 'flex-col cursor-pointer'
              : 'flex-row hover:bg-gray-100 ')
          "
          @click.stop="!enableOptGroup ? toggleSelection(item) : ''"
        >
          <span :class="item.children && enableOptGroup ? 'font-bold' : ''">{{
            item[itemText] != undefined ? item[itemText] : item
          }}</span>
          <ul v-if="item.children && enableOptGroup" class="pl-1">
            <li
              v-for="(child, idx) of item.children"
              :key="idx"
              class="hover:bg-gray-100 cursor-pointer flex justify-between"
              :class="multiple ? 'multi-selection' : ''"
              @click.stop="toggleSelection(child)"
            >
              <span>{{ child[itemText] }}</span>
              <i
                v-if="isSelected(child)"
                class="mdi mdi-check-bold text-primary-500"
              ></i>
            </li>
          </ul>
          <i
            v-if="!item.children && isSelected(item) && !enableOptGroup"
            class="mdi mdi-check-bold text-primary-500"
          ></i>
        </li>
      </ul>
    </div>

    <span v-if="!!maxSelection" class="max-selection">{{
      $t("common.maxitems", { num: maxSelection })
    }}</span>
    <slot name="content"></slot>
    <slot name="errors"></slot>
  </div>
</template>

<script>
export default {
  name: "OnSelect",
  props: {
    value: { type: [Array, String, Number], default: () => [] },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    label: {
      type: String,
      default: "",
    },
    noItemsString: {
      type: String,
      default: "",
    },
    itemText: {
      type: String,
      default: "text",
    },
    itemValue: {
      type: String,
      default: "value",
    },
    returnObject: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    enableOptGroup: {
      type: Boolean,
      default: false,
    },
    maxSelection: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    unselectableVal: {
      type: [String, Number],
      defautl: null,
    },
    // clearable: {
    //   type: Boolean,
    //   default: false,
    // },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      currentSelection: [],
      retData: [],
      search: "",
      searchFocus: false,
    };
  },
  computed: {
    currentSelectionLabelSplit() {
      return this.currentSelection > 3
        ? this.currentSelection
            .map((el) =>
              el[this.itemText] != undefined ? el[this.itemText] : el
            )
            .slice(0, 3)
            .join(", ") + "…"
        : this.currentSelection
            .map((el) => {
              return el[this.itemText] != undefined ? el[this.itemText] : el;
            })
            .join(", ");
    },
    filteredItems() {
      return this.items.filter((item) => {
        return item[this.itemText] != undefined
          ? item[this.itemText]
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          : item.toString().toLowerCase().indexOf(this.search.toLowerCase()) >
              -1;
      });
    },
  },
  watch: {
    value(value) {
      this.currentSelection = [];

      if (Array.isArray(value)) {
        this.currentSelection = value.map((el) => {
          if (typeof el === "object") {
            return el;
          } else {
            return this.items.find((item) =>
              typeof item === "object"
                ? item[this.itemValue] == el
                : item === el
            );
          }
        });
      } else {
        if (value != "") {
          this.currentSelection = this.items.filter((el) =>
            typeof el === "object" ? el[this.itemValue] === value : el === value
          );
        }
      }
    },
  },
  mounted() {
    this.currentSelection = [];

    if (Array.isArray(this.value)) {
      this.currentSelection = this.value.map((el) => {
        if (typeof el === "object") {
          return el;
        } else {
          return this.items.find((item) =>
            typeof item === "object" ? item[this.itemValue] == el : item === el
          );
        }
      });
    } else {
      if (this.value != "") {
        this.currentSelection = this.items.filter((el) =>
          typeof el === "object"
            ? el[this.itemValue] === this.value
            : el === this.value
        );
      }
    }
  },
  methods: {
    toggleOpen() {
      if (this.disabled) {
        this.isOpen = false;
        return;
      }
      this.isOpen = !this.isOpen;
      this.search = "";
    },
    toggleSelection(val) {
      this.maxSelectionError = false;

      if (
        this.unselectableVal === undefined ||
        (typeof val === "object" &&
          val[this.itemValue] !== this.unselectableVal) ||
        (typeof val !== "object" && val !== this.unselectableVal)
      ) {
        if (this.multiple) {
          const itemIdx = this.currentSelection.findIndex((el) =>
            el[this.itemValue] != undefined
              ? el[this.itemValue] === val[this.itemValue]
              : el === val
          );
          if (this.currentSelection.length > 0 && itemIdx !== -1) {
            this.currentSelection.splice(itemIdx, 1);
          } else {
            if (
              this.maxSelection > 0 &&
              this.currentSelection.length >= this.maxSelection
            ) {
              return;
            }

            this.currentSelection.push(val);
          }

          this.retData = this.returnObject
            ? this.currentSelection
            : this.currentSelection.map((el) => {
                return el[this.itemValue] != undefined
                  ? el[this.itemValue]
                  : el;
              });
        } else {
          this.isOpen = false;
          this.currentSelection = [val];

          this.retData = this.returnObject
            ? this.currentSelection
            : this.currentSelection.map((el) => {
                return el[this.itemValue] != undefined
                  ? el[this.itemValue]
                  : el;
              })[0];
        }

        this.$emit("input", this.retData);
        this.$emit("change", this.retData);
      }
    },
    isSelected(item) {
      let selected = Array.isArray(this.currentSelection)
        ? this.currentSelection.some((el) =>
            el[this.itemValue] != undefined
              ? el[this.itemValue] === item[this.itemValue]
              : el == item
          )
        : this.currentSelection == item[this.itemValue];

      return selected;
    },
    closeConditional() {
      setTimeout(() => {
        this.isOpen = this.searchFocus ? true : false;
      }, 200);
    },
    toggleSearcFocus(status) {
      this.searchFocus = status;
      if (!status) {
        this.closeConditional();
      }
    },
    clear() {
      this.search = "";
      this.toggleSearcFocus(true);
    },
  },
};
</script>

<style  scoped>
/* .on-select {
  @apply relative w-full text-left outline-none;
}

.on-select:disabled,
.on-select.disabled,
.on-select.disabled .selected {
  @apply cursor-not-allowed opacity-50;
}

.on-select .selected {
  color: inherit;
  @apply py-1 px-2 pr-8 cursor-pointer select-none bg-transparent overflow-ellipsis overflow-hidden;
}

.on-select .selected span {
  @apply whitespace-nowrap;
}

.on-select .selected.isActive {
  @apply border-gray-900;
}

.on-select .container {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  @apply z-40 left-0 right-0 text-gray-500 bg-white rounded-md;
}
.on-select .items {
  @apply max-h-48 overflow-y-auto pb-5;
}

.on-select .items ul {
  @apply pt-3 pb-5 px-2;
}

.on-select .items li {
  @apply p-2 px-2;
}

.selectHide {
  display: none;
}

.on-select .max-selection {
  @apply px-2 text-xs text-secondary-400 italic;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 1em;
  width: 1em;
  border-radius: 50em;
  background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
    no-repeat 50% 50%;
  background-size: contain;
  opacity: 0;
  pointer-events: none;
}

input[type="search"]:focus::-webkit-search-cancel-button {
  opacity: 0.3;
  pointer-events: all;
}

input[type="search"].dark::-webkit-search-cancel-button {
  filter: invert(1);
} */
</style>
