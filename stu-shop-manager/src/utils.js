function deepClone(obj) {
	// 数据类型为引用数据类型
	if (typeof obj === 'object') {
		// 初始化返回结果
		let result = Array.isArray(obj)? []: {};
		for (let key in obj) {
			// 避免相互引用出现死循环导致爆栈
			if (obj === obj[key]) {
				continue
			}
			if (obj.hasOwnProperty(key)) {
				// 递归调用
				result[key] = deepClone(obj[key])
			}
		}
		return result;
	} else {
		// 基本数据类型，直接返回
		return obj
	}
}


function filterHideRoutes(routes) {
  return routes.filter(route => {
    if (route.children) {
      route.children = filterHideRoutes(route.children)
    }
    return route.isShow
  })
}

export function generatorRoutes(routes, key) {
  const copyRoutes = deepClone(routes)
  return filterHideRoutes(copyRoutes).map(route => {
    if (route.children) {
      route.children = generatorRoutes(route.children, route.key)
    }
    return {
      key: key ? `${key}${route.path}` : route.path,
      label: route.label,
      icon: route.icon,
      children: route.children,
    }
  })
}