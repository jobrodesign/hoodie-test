<app>
    <header>
        App
        <span if="{loggedIn}">Logged In</span>
        <span if="{!loggedIn}">Sign In</span>
    </header>

    <footer>Copyright &copy; 2017</footer>

    <script>
        var self = this;

        self.loggedIn = false;


        hoodie.account.get('session')
            .then(function(session){
            	if(session){
            		self.loggedIn = true;
                }
            });

    </script>
</app>