export interface AIModelOption {
  id: string;
  name: string;
  category: 'Gemini 3 シリーズ' | 'Gemini 2.5 シリーズ' | 'その他・オープン';
  description: string;
  badge?: string;
}

export const FREE_VISION_MODELS: AIModelOption[] = [
  {
    id: 'gemini-3.5-flash',
    name: 'Gemini 3.5 Flash',
    category: 'Gemini 3 シリーズ',
    description: '高速かつ高度な多角理解に対応する最新標準マルチモーダルモデル',
    badge: '推奨',
  },
  {
    id: 'gemini-3.1-flash-lite',
    name: 'Gemini 3.1 Flash-Lite',
    category: 'Gemini 3 シリーズ',
    description: '画像・動画・テキスト対応の軽量・超高速モデル',
  },
  {
    id: 'gemini-3-flash-preview',
    name: 'Gemini 3 Flash Preview',
    category: 'Gemini 3 シリーズ',
    description: 'Gemini 3 世代のプレビュー版マルチモーダルモデル',
  },
  {
    id: 'gemini-2.5-pro',
    name: 'Gemini 2.5 Pro',
    category: 'Gemini 2.5 シリーズ',
    description: '複雑な図表解析・高度な推論に強い高性能モデル',
  },
  {
    id: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    category: 'Gemini 2.5 シリーズ',
    description: '安定した処理速度と精度を併せ持つ標準モデル',
  },
  {
    id: 'gemini-2.5-flash-lite',
    name: 'Gemini 2.5 Flash-Lite',
    category: 'Gemini 2.5 シリーズ',
    description: '画像入力に対応した低遅延・省コストモデル',
  },
  {
    id: 'gemini-2.5-flash-lite-preview-09-2025',
    name: 'Gemini 2.5 Flash-Lite Preview (09-2025)',
    category: 'Gemini 2.5 シリーズ',
    description: '2.5 Flash-Lite の開発プレビュー版',
  },
  {
    id: 'gemini-3.1-flash-live-preview',
    name: 'Gemini 3.1 Flash Live Preview',
    category: 'Gemini 3 シリーズ',
    description: 'カメラ映像・画像フレーム入力対応のリアルタイムモデル',
  },
  {
    id: 'gemini-robotics-er-1.6-preview',
    name: 'Gemini Robotics ER 1.6 Preview',
    category: 'Gemini 3 シリーズ',
    description: '物理世界理解・空間情報識別向けのロボティクス思考モデル',
  },
  {
    id: 'gemma-4-26b-a4b-it',
    name: 'Gemma 4 26B A4B IT',
    category: 'その他・オープン',
    description: '4Bアクティブパラメータの超高効率オープンマルチモーダルモデル',
  },
  {
    id: 'gemma-4-31b-it',
    name: 'Gemma 4 31B IT',
    category: 'その他・オープン',
    description: '最大品質と高度なロングコンテキストに対応するフラグシップオープンモデル',
  },
];

export const DEFAULT_AI_MODEL = 'gemini-3.5-flash';
export const STORAGE_KEY_AI_MODEL = 'field_observer_selected_ai_model';

export function getStoredAIModel(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_AI_MODEL);
    if (saved && FREE_VISION_MODELS.some((m) => m.id === saved)) {
      return saved;
    }
  } catch {
    // LocalStorage access error fallback
  }
  return DEFAULT_AI_MODEL;
}

export function setStoredAIModel(modelId: string): void {
  try {
    localStorage.setItem(STORAGE_KEY_AI_MODEL, modelId);
  } catch {
    // LocalStorage access error fallback
  }
}
