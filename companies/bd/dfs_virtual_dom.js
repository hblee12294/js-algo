/**
 * Link: https://blog.51cto.com/13869008/2321387
 */
function h(name, props, children) {
  return {
    name: name,
    props: props,
    children: children,
  }
}

const tree = h('body', { className: 'main' }, [
  h('div', { className: 'sideBar' }, [
    h('ul', { className: 'sideBarContainer' }, [
      h('li', { className: 'sideBarItem' }, ['sidebar-1']),
      h('li', { className: 'sideBarItem' }, ['sidebar-2']),
      h('li', { className: 'sideBarItem' }, ['sidebar-3']),
    ]),
  ]),
  h('div', { className: 'mainContent' }, [
    h('div', { className: 'header' }, ['header-zone']),
    h('div', { className: 'coreContent' }, ['core-content']),
    h('div', { className: 'footer' }, ['footer-zone']),
  ]),
  h('div', { className: 'rightSide' }, ['hold on']),
])

function dfsWalking(tree, layer = 0) {
  // console.log(layer)

  if (typeof tree.children[0] === 'string') {
    console.log(
      `${indent(layer)}<${tree.name}${
        tree.props.className ? ` class="${tree.props.className}"` : ''
      }>${tree.children[0]}</${tree.name}>`,
    )
  } else {
    console.log(
      `${indent(layer)}<${tree.name}${
        tree.props.className ? ` class="${tree.props.className}"` : ''
      }>`,
    )

    for (let i = 0, childrenLen = tree.children.length; i < childrenLen; ++i) {
      dfsWalking(tree.children[i], layer + 1)
    }

    console.log(`${indent(layer)}</${tree.name}>`)
  }
}

function indent(layer) {
  let result = ''

  while (layer-- > 0) {
    result += '  '
  }

  return result
}

dfsWalking(tree)
