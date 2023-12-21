// 接口
import type { ButtonHTMLAttributes } from 'vue';

// 大小
export type ButtonSizeType = 'default' | 'medium' | 'small' | 'mini' | 'tiny';
// 类型
export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning';

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>;