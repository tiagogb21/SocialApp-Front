export const message = {
  isRequired(target: string) {
    return `${target} is required`
  },
  invalid(target: string) {
    return `Invalid ${target}`
  },
  min(min: number) {
    return `Must be at least ${min} characters`;
  },
  max(max: number) {
    return `Must be at most ${max} characters`;
  },
};
