=Summary=
unit testing framework for JScript

=Example=
==TestCase(date_test.js)
{{{
TestCase("Date Test", {
  setUp: function() {
    this.dt = new Date(2011, 2, 22, 15, 25, 28, 3);
  },
  testGetFormattedDate: function() {
    assertEquals("2011/03/22 15:25:28", this.dt.getFormattedDate());
  },
  testGetYYYYMMDD: function() {
    assertEquals("20110322", this.dt.getYYYYMMDD());
  },
  testGetYYYYMMDDHH24MISS: function() {
    assertEquals("20110322152528", this.dt.getYYYYMMDDHH24MISS());
  }
});
}}}

==TestScript
{{{
<?xml version="1.0" encoding="UTF-8" ?>
<package>
  <job>
    <script language="JScript" src="mado.js"></script>
    <script language="JScript" src="jscriptunit.js"></script>
    <script language="JScript" src="date_test.js"></script>
  </job>
</package>
}}}

==Run TestScript
{{{
>cscript //NoLogo runtest.wsf
OK: testGetFormattedDate
OK: testGetYYYYMMDD
OK: testGetYYYYMMDDHH24MISS
OK: 3 tests, 0 failures

>
}}}
