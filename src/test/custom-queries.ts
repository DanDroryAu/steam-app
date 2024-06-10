import domTestingLib, { type MatcherOptions } from '@testing-library/dom';
const { queryHelpers } = domTestingLib;

export const queryAllByClassName = queryHelpers.queryAllByAttribute.bind(
  null,
  'class',
);

export const queryAllByDataRowKey = queryHelpers.queryAllByAttribute.bind(
  null,
  'data-row-key',
);

export function getAllByDataRowKey(container: HTMLElement, id: string | RegExp, ...rest: MatcherOptions[]) {
  const els = queryAllByDataRowKey(container, id, ...rest);
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [data-row-key="${id}"]`,
      container,
    );
  }
  return els;
}

export function getAllByClassName(container: HTMLElement, id: string | RegExp, ...rest: MatcherOptions[]) {
  const els = queryAllByClassName(container, id, ...rest);
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [class="${id}"]`,
      container,
    );
  }
  return els;
}

export default {
  queryAllByDataRowKey,
  getAllByDataRowKey,
  queryAllByClassName,
  getAllByClassName
};
