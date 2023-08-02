package io.ionic.starter;

import android.annotation.TargetApi;
import android.app.Application;
import android.content.Context;
import android.content.Intent;
import android.graphics.PixelFormat;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.app.Activity;

import androidx.annotation.RequiresApi;
//import androidx.appcompat.app.AppCompatActivity;
import com.getcapacitor.BridgeActivity;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import java.security.Provider;

public class AppDefault extends BridgeActivity {
   
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        hideSystemBars();
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

        WindowManager manager = ((WindowManager) getApplicationContext().getSystemService(Context.WINDOW_SERVICE));
        WindowManager.LayoutParams localLayoutParams = new WindowManager.LayoutParams();

        //localLayoutParams.type = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY;
        localLayoutParams.type = WindowManager.LayoutParams.TYPE_SYSTEM_ERROR;
        localLayoutParams.gravity = Gravity.CENTER | Gravity.TOP;
        localLayoutParams.flags = WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE|
        // this is to enable the notification to recieve touch events
        WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL |
        // Draws over status bar
        WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN;
        localLayoutParams.width = WindowManager.LayoutParams.MATCH_PARENT;
        localLayoutParams.height = (int) (25 * getResources().getDisplayMetrics().scaledDensity);
        localLayoutParams.format = PixelFormat.TRANSPARENT;
        checkDrawOverlayPermission();

        if(Build.VERSION.SDK_INT >= 23) {
            if (!Settings.canDrawOverlays(this)) {
                Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                        Uri.parse("package:" + getPackageName()));
                startActivityForResult(intent, 1234);
            }
        }
        else {
            Intent intent = new Intent(this, Provider.Service.class);
            startService(intent);
        }
        hideSystemUI();
    }


    @Override
    public void onResume() {
        super.onResume();
        hideSystemUI();
        hideSystemBars();
        disablePullNotificationTouch();
    }


    private void hideSystemBars() {
        WindowInsetsControllerCompat windowInsetsController =
                ViewCompat.getWindowInsetsController(getWindow().getDecorView());
        if (windowInsetsController == null) {
            return;
        }
        // Configure the behavior of the hidden system bars
        windowInsetsController.setSystemBarsBehavior(
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_BARS_BY_TOUCH
        );
        // Hide both the status bar and the navigation bar
        windowInsetsController.hide(WindowInsetsCompat.Type.systemBars());
    }

    private void hideSystemUI() {
        // Set the IMMERSIVE flag.
        // Set the content to appear under the system bars so that the content
        // doesn't resize when the system bars hide and show.

        getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                        | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                        | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION // hide nav bar
                        | View.SYSTEM_UI_FLAG_FULLSCREEN // hide status bar
                        | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
    }

    private void disablePullNotificationTouch() {
        try {
            Log.v("App", "Disable Pull Notification");

            CustomViewGroup mView = new CustomViewGroup(this);
            int statusBarHeight = (int) Math.ceil(25 * getResources().getDisplayMetrics().density);
            Log.v("App", "" + statusBarHeight);

            WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                    WindowManager.LayoutParams.MATCH_PARENT,
                    statusBarHeight,
                    WindowManager.LayoutParams.TYPE_SYSTEM_ERROR,
                    WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE |
                    WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL |
                    WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN, //Disables status bar
                    PixelFormat.OPAQUE); //Transparent

            params.type = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY;
            params.gravity = Gravity.CENTER | Gravity.TOP;

            WindowManager wm = (WindowManager) getSystemService(WINDOW_SERVICE);
            wm.addView(mView, params);
        } catch (Exception e) {
            Log.v("App", "Exception: " + e.getMessage());

        }
    }

    // code to post/handler request for permission
    public final static int REQUEST_CODE = -1010101;

    @RequiresApi(api = Build.VERSION_CODES.M)
    public void checkDrawOverlayPermission() {
        Log.v("App", "Package Name: " + getApplicationContext().getPackageName());

        // check if we already  have permission to draw over other apps
        
        if (!Settings.canDrawOverlays(this)) {
            Log.v("App", "Requesting Permission" + Settings.canDrawOverlays(this));
            // if not construct intent to request permission
            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                    Uri.parse("package:" + getApplicationContext().getPackageName()));
            // request permission via start activity for result
            startActivityForResult(intent, REQUEST_CODE);
        } else {
            Log.v("App", "We already have permission for it.");
            disablePullNotificationTouch();
        }

         
        try {
            disablePullNotificationTouch();
        } catch (Exception ex) {
            Log.e("ORBE", "checkDrawOverlayPermission: ", ex);
        }
    }
    @TargetApi(Build.VERSION_CODES.M)
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.v("App", "OnActivity Result.");
        //check if received result code
        //  is equal our requested code for draw permission
        if (requestCode == REQUEST_CODE) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (Settings.canDrawOverlays(this)) {
                    disablePullNotificationTouch();
                }
            }
        }
    }
}
