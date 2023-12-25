import { defineComponent, computed, inject, h } from "vue";

export default defineComponent({
  name: "myCol",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props, ctx) {
    const gutter = inject("myRow") as number;
    const Class = computed(() => {
      const res: string[] = [];
      const pops = ["span", "offset"] as const;
      pops.forEach((item) => {
        const size = props[item];
        if (typeof size === "number" && size > 0) {
          res.push(`my-col-${item}-${size}`);
        }
      });
      return ["my-col", ...res];
    });

    const styles = computed(() => {
      if (gutter !== 0) {
        return {
          paddingLeft: gutter / 2 + "px",
          paddingRight: gutter / 2 + "px",
        };
      }
      return {};
    });
    return () =>
      h(
        props.tag,
        { class: Class.value, styles: styles.value },
        ctx.slots.default?.()
      );
  },
});
