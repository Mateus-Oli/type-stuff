export const interfaceValidator = Object.assign({}, {

  functorLike: x => can(x)('map'),
  monadLike: x => can(x)('map') && can(x)('flatMap'),

  eventLike: x => can(x)('on') || can(x)('addEventListener'),

  promiseLike: x => can(x)('then'),

  iterableLike: x => can(x)(Symbol.iterator)
});

export const can = x => method => !!x && typeof x[method] === 'function';
