export const interfaceValidator = Object.assign({}, {

  monadLike: x => can(x)('map') && can(x)('flatMap'),
  functorLike: x => can(x)('map'),

  eventLike: x => can(x)('on') || can(x)('addEventListener'),

  promiseLike: x => can(x)('then'),

  iterableLike: x => can(x)(Symbol.iterator)
});

export const can = x => method => !!x && typeof x[method] === 'function';
