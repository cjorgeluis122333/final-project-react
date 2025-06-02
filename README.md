# Paradigmas de Programación Utilizados

Este proyecto aplica una combinación de paradigmas de programación que permiten una estructura clara, mantenible y funcionalmente rica. A continuación, se detallan los principales paradigmas empleados:

## 1. Paradigma Imperativo

El enfoque imperativo está presente en la mayoría del código, donde se indica paso a paso cómo se deben realizar las operaciones. Por ejemplo, en funciones como `createStudent`, `deleteStudent` o `fetchAllStudent`, se definen instrucciones específicas para realizar peticiones HTTP y manejar respuestas.

```js
const res = await fetch("http://localhost:8081/api/student/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newStudent),
});
```

## 2. Paradigma Declarativo

Se hace uso del paradigma declarativo al trabajar con React y sus hooks, donde se define qué se quiere mostrar y no cómo mostrarlo. Por ejemplo, al renderizar una lista de componentes basados en datos:
```js
{students.map(student => (
  <UserItem
    key={student.id}
    student={student}
    onTryUpdate={onOpen}
    onTryDelete={onOpenDeleteModal}
  />
))}
```

Además, se usan hooks como useEffect y useState para describir el comportamiento reactivo del componente sin necesidad de manipular directamente el DOM.

## 3. Paradigma Funcional
El código reutiliza funciones puras y utiliza conceptos del paradigma funcional como la inmutabilidad del estado.
```js
setState({
  ...state,
  isLoading: true,
  error: null
});
```
También se aplican funciones como callbacks, promesas y composición funcional para manejar lógica asincrónica de forma limpia y predecible.

## 4. Modularidad y Abstracción
El proyecto está estructurado en módulos reutilizables, separados en carpetas como:

/hooks → lógica reutilizable basada en React Hooks

/helper → funciones utilitarias puras

/components → componentes funcionales de React

Esta organización fomenta la separación de responsabilidades, facilita las pruebas unitarias y mejora la mantenibilidad del código