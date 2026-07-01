export function shouldIgnoreBareChatInputTextChange({
  isWeb,
  ignoreNativeTextChanges,
}: {
  isWeb: boolean;
  ignoreNativeTextChanges: boolean;
}) {
  return !isWeb && ignoreNativeTextChanges;
}

export function shouldRefocusBareChatInputAfterNativeClear({
  isWeb,
}: {
  isWeb: boolean;
}) {
  return !isWeb;
}
