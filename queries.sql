-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT P.ProductName, C.CategoryName 
from Products as P
join Categories as C
on P.CategoryID = C.CategoryID

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT O.OrderID, S.ShipperName, O.OrderDate
from Orders as O
join Shippers as S
where O.OrderDate > 2012-08-09

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT P.ProductName, OD.Quantity
from Products as P
join OrderDetails as OD
	on P.ProductID = OD.ProductID
where OD.OrderID = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT O.OrderID, C.CustomerName as "Customer Name", E.LastName as "Employee Last Name"
from Orders as O
JOIN Customers as C
JOIN Employees as E
	on O.CustomerID = C.CustomerID and O.EmployeeID = E.EmployeeID