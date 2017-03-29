using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MineSweeper
{
    internal class Points
    {
        string playerName;
        int playerScore;

        public string PlayerName
        {
            get { return playerName; }
            set { playerName = value; }
        }

        public int PlayerScore
        {
            get { return playerScore; }
            set { playerScore = value; }
        }

        public Points() { }

        public Points(string име, int то4ки)
        {
            this.playerName = име;
            this.playerScore = то4ки;
        }
    }
}
