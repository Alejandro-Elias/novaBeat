export let indexCurrent = 0;

export const resetIndex = () => {
  indexCurrent = 0;
};

export const nextIndex = () => {
  indexCurrent++;
};

export const previousIndex = () => {
  indexCurrent--;
};