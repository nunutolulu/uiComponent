// 根据属性返回类名
// my-b__e--m

// 将参数拼接成bem命名规范的类名
// 当bem中有不需要传参的，传入空字符串即可
const _getBEM = (
    baseName: string,
    block: string,
    element: string,
    modifier: string
  ) => {
    let res = baseName
  
    if (block) {
      res += `-${block}`
    }
  
    if (element) {
      res += `__${element}`
    }
  
    if (modifier) {
      res += `--${modifier}`
    }
  
    return res
  }
  
  export const useNamespace = (componentName: string) => {
    const baseName = `my-${componentName}`
  
    // 返回一个`my-${componentName}-${block}`字符串
    const addBlock = (block: string | undefined): string => {
      return block ? _getBEM(baseName, block, '', '') : ''
    }
  
    // 返回一个`my--${componentName}__${element}`字符串
    const addElement = (element: string | undefined): string => {
      return element ? _getBEM(baseName, '', element, '') : ''
    }
  
    // 返回一个`my--${componentName}--${modifier}`字符串
    const addModifier = (modifier: string | undefined): string => {
      return modifier ? _getBEM(baseName, '', '', modifier) : ''
    }
  
    // 返回一个`my--${componentName}-${block}--${modifier}`字符串
    const addBM = (
      block: string | undefined,
      modifier: string | undefined
    ): string => {
      return block && modifier ? _getBEM(baseName, block, '', modifier) : ''
    }
  
    // 返回一个`my--${componentName}-${block}__${element}`字符串
    const addBE = (
      block: string | undefined,
      element: string | undefined
    ): string => {
      return block && element ? _getBEM(baseName, block, element, '') : ''
    }
  
    // 返回一个`my--${componentName}__${element}--${modifier}`字符串
    const addEM = (
      element: string | undefined,
      modifier: string | undefined
    ): string => {
      return element && modifier ? _getBEM(baseName, '', element, modifier) : ''
    }
  
    // 返回一个`my--${componentName}-${block}__${element}--${modifier}`字符串
    const addBEM = (
      block: string | undefined,
      element: string | undefined,
      modifier: string | undefined
    ): string => {
      return block && element && modifier
        ? _getBEM(baseName, block, element, modifier)
        : ''
    }
  
    const setCssVarName = (keyName: string): string => {
      return `--${baseName}--${keyName}`
    }
  
    // 给css里的变量赋值，返回的res给标签动态传入style即可
    const setStyles = (styleList: Record<string, string>) => {
      const res: Record<string, string> = {}
      for (const key in styleList) {
        res[`--${baseName}-${key}`] = styleList[key]
      }
  
      return res
    }
  
    // 根据一些布尔属性判断是否要添加类名，传入添加的类名和布尔值
    const getClass = (className: string, classState: boolean) => {
      return classState ? className : ''
    }
  
    return {
      baseName,
      addBlock,
      addElement,
      addModifier,
      addBE,
      addBM,
      addEM,
      addBEM,
      setCssVarName,
      setStyles,
      getClass
    }
  }