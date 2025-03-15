export const loggerDebug = (message: string, context?: string) => {
  if (__DEV__) {
    console.log(context ? `[${context}] ${message}` : message);
  }
};

export const loggerWarning = (message: string, context?: string) => {
  console.warn(context ? `[${context}] ${message}` : message);
};

export const loggerError = (message: string, error?: unknown) => {
  console.error(`[ERROR] ${message}`, error);
};
