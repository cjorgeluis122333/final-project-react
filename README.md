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

## 1. Paradigma Imperativo
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
