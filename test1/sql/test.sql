-- maksudnya select column population dari table world
-- dimana nama ialah malaysia
-- so result dia akan jadi population = jumlah

SELECT population FROM world
WHERE name = 'malaysia';

-- contoh query banyak column
-- gunakan IN

SELECT name, population FROM world
WHERE name IN ('brunei', 'singapore');


-- BETWEEN AND 
-- to filter a range between this_value and this_value
SELECT name, population FROM world
WHERE population BETWEEN 100000 AND 200000;

-- result is all name with population from 100,000 and 200,000
-- also the result of population display as well

-- LIKE %
-- to filter word start with CA%
-- the result CANADA WITH POPULATION, CAMBODIA WITH POPULATION
SELECT name, population FROM world
WHERE name LIKE 'CA%';


