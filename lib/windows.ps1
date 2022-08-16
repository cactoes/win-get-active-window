Param(
[string]$n, [string]$interval
)
Add-Type @"
  using System;
  using System.Runtime.InteropServices;
  public class UserWindows {
    [DllImport("user32.dll")]
    public static extern IntPtr GetForegroundWindow();
}
"@
try {
	while($n -ne 0){
		$ActiveHandle = [UserWindows]::GetForegroundWindow()
		$Process = Get-Process | Where-Object {$_.MainWindowHandle -eq $activeHandle}
		$string =  $Process | Select-Object ProcessName, @{Name="AppTitle";Expression= {($_.MainWindowTitle)}}
		Write-Host -NoNewline $string
		Start-Sleep -s $interval
		If ($n -gt 0) {$n-=1} 
	}
} catch {
 Write-Error "Failed to get active Window details. More Info: $_"
}
