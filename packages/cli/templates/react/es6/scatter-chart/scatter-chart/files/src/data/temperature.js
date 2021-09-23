/*
United States Food and Agriculture gross production.

Data from: http://data.un.org/

Original source: http://faostat.fao.org/
*/
var data = {
	agriculturalData : [
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2007, "Value_Unit": "1,000,000 Int. $", "Value": 184698, "Population_Unit": "1,000,000 People", "Population": 302 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2006, "Value_Unit": "1,000,000 Int. $", "Value": 176803, "Population_Unit": "1,000,000 People", "Population": 299 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2005, "Value_Unit": "1,000,000 Int. $", "Value": 181432, "Population_Unit": "1,000,000 People", "Population": 296 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2004, "Value_Unit": "1,000,000 Int. $", "Value": 183519, "Population_Unit": "1,000,000 People", "Population": 294 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2003, "Value_Unit": "1,000,000 Int. $", "Value": 172458, "Population_Unit": "1,000,000 People", "Population": 291 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2002, "Value_Unit": "1,000,000 Int. $", "Value": 167494, "Population_Unit": "1,000,000 People", "Population": 288 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2001, "Value_Unit": "1,000,000 Int. $", "Value": 170755, "Population_Unit": "1,000,000 People", "Population": 285 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 2000, "Value_Unit": "1,000,000 Int. $", "Value": 173640, "Population_Unit": "1,000,000 People", "Population": 282 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1999, "Value_Unit": "1,000,000 Int. $", "Value": 170083, "Population_Unit": "1,000,000 People", "Population": 279 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1998, "Value_Unit": "1,000,000 Int. $", "Value": 167311, "Population_Unit": "1,000,000 People", "Population": 275 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1997, "Value_Unit": "1,000,000 Int. $", "Value": 167072, "Population_Unit": "1,000,000 People", "Population": 272 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1996, "Value_Unit": "1,000,000 Int. $", "Value": 162066, "Population_Unit": "1,000,000 People", "Population": 269 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1995, "Value_Unit": "1,000,000 Int. $", "Value": 152325, "Population_Unit": "1,000,000 People", "Population": 266 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1994, "Value_Unit": "1,000,000 Int. $", "Value": 164433, "Population_Unit": "1,000,000 People", "Population": 263 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1993, "Value_Unit": "1,000,000 Int. $", "Value": 142796, "Population_Unit": "1,000,000 People", "Population": 260 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1992, "Value_Unit": "1,000,000 Int. $", "Value": 155467, "Population_Unit": "1,000,000 People", "Population": 258 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1991, "Value_Unit": "1,000,000 Int. $", "Value": 143249, "Population_Unit": "1,000,000 People", "Population": 255 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1990, "Value_Unit": "1,000,000 Int. $", "Value": 144644, "Population_Unit": "1,000,000 People", "Population": 253 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1989, "Value_Unit": "1,000,000 Int. $", "Value": 138218, "Population_Unit": "1,000,000 People", "Population": 250 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1988, "Value_Unit": "1,000,000 Int. $", "Value": 126910, "Population_Unit": "1,000,000 People", "Population": 248 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1987, "Value_Unit": "1,000,000 Int. $", "Value": 136752, "Population_Unit": "1,000,000 People", "Population": 245 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1986, "Value_Unit": "1,000,000 Int. $", "Value": 136708, "Population_Unit": "1,000,000 People", "Population": 243 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1985, "Value_Unit": "1,000,000 Int. $", "Value": 143144, "Population_Unit": "1,000,000 People", "Population": 241 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1984, "Value_Unit": "1,000,000 Int. $", "Value": 136529, "Population_Unit": "1,000,000 People", "Population": 238 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1983, "Value_Unit": "1,000,000 Int. $", "Value": 119197, "Population_Unit": "1,000,000 People", "Population": 236 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1982, "Value_Unit": "1,000,000 Int. $", "Value": 139500, "Population_Unit": "1,000,000 People", "Population": 234 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1981, "Value_Unit": "1,000,000 Int. $", "Value": 139390, "Population_Unit": "1,000,000 People", "Population": 232 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1980, "Value_Unit": "1,000,000 Int. $", "Value": 127118, "Population_Unit": "1,000,000 People", "Population": 229 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1979, "Value_Unit": "1,000,000 Int. $", "Value": 133091, "Population_Unit": "1,000,000 People", "Population": 227 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1978, "Value_Unit": "1,000,000 Int. $", "Value": 126211, "Population_Unit": "1,000,000 People", "Population": 225 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1977, "Value_Unit": "1,000,000 Int. $", "Value": 126192, "Population_Unit": "1,000,000 People", "Population": 223 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1976, "Value_Unit": "1,000,000 Int. $", "Value": 120877, "Population_Unit": "1,000,000 People", "Population": 221 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1975, "Value_Unit": "1,000,000 Int. $", "Value": 117511, "Population_Unit": "1,000,000 People", "Population": 219 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1974, "Value_Unit": "1,000,000 Int. $", "Value": 110119, "Population_Unit": "1,000,000 People", "Population": 217 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1973, "Value_Unit": "1,000,000 Int. $", "Value": 113008, "Population_Unit": "1,000,000 People", "Population": 215 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1972, "Value_Unit": "1,000,000 Int. $", "Value": 111439, "Population_Unit": "1,000,000 People", "Population": 213 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1971, "Value_Unit": "1,000,000 Int. $", "Value": 111234, "Population_Unit": "1,000,000 People", "Population": 211 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1970, "Value_Unit": "1,000,000 Int. $", "Value": 102786, "Population_Unit": "1,000,000 People", "Population": 209 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1969, "Value_Unit": "1,000,000 Int. $", "Value": 104285, "Population_Unit": "1,000,000 People", "Population": 207 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1968, "Value_Unit": "1,000,000 Int. $", "Value": 103420, "Population_Unit": "1,000,000 People", "Population": 205 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1967, "Value_Unit": "1,000,000 Int. $", "Value": 101177, "Population_Unit": "1,000,000 People", "Population": 203 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1966, "Value_Unit": "1,000,000 Int. $", "Value": 97277, "Population_Unit": "1,000,000 People", "Population": 201 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1965, "Value_Unit": "1,000,000 Int. $", "Value": 97704, "Population_Unit": "1,000,000 People", "Population": 199 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1964, "Value_Unit": "1,000,000 Int. $", "Value": 94323, "Population_Unit": "1,000,000 People", "Population": 197 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1963, "Value_Unit": "1,000,000 Int. $", "Value": 93700, "Population_Unit": "1,000,000 People", "Population": 194 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1962, "Value_Unit": "1,000,000 Int. $", "Value": 90275, "Population_Unit": "1,000,000 People", "Population": 191 },
		{ "Country": "United States of America", "Element": "Gross Production 1999-2001 (1000 I$)", "Year": 1961, "Value_Unit": "1,000,000 Int. $", "Value": 89816, "Population_Unit": "1,000,000 People", "Population": 189 }
]};
export { data };