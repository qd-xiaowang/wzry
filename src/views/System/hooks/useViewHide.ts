import { ref } from "vue";

type Emits = (e: "update:modelValue", v: boolean) => void;

export default <T>($emit: Emits, key: string) => {
  /** 显示页面 */
  const show = ref(false);
  /** 发布成功 */
  const finish = ref(false);
  /** 发布状态 */
  const status = ref(0);
  /** 英雄id */
  const hero_id = ref<number | undefined>();
  /** 提交数据 */
  const form_data = ref<T>();

  /* 判断是否存在草稿 */
  const cache = localStorage.getItem(key);
  if (cache) {
    const data = JSON.parse(cache);
    form_data.value = data.form_data;
    hero_id.value = data.hero_id;
  }
  /* 实时保存为草稿 */
  const timer = setInterval(() => {
    localStorage.setItem(
      key,
      JSON.stringify({
        hero_id: hero_id.value,
        form_data: form_data.value,
      }),
    );
  }, 1000);

  /* 关闭后操作 */
  const close = () => {
    clearInterval(timer);
    show.value = false;
    setTimeout(() => {
      $emit("update:modelValue", false);
    }, 500);
  };

  /* 关闭前保存 */
  const onConfirmSave = () => {
    close();
  };
  /* 关闭后删除 */
  const onConfirmRemove = () => {
    localStorage.removeItem(key);
    close();
  };

  return {
    /** 英雄id */
    hero_id,
    /** 发布状态 */
    status,
    /** 显示页面 */
    show,
    /** 表单对象 */
    form_data,
    /** 发布成功 */
    finish,
    onConfirmSave,
    onConfirmRemove,
  };
};
